import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    shortURl: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    OrginalUrl: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (v) {
          return /^(http|https):\/\/[^ "]+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid URL!`,
      },
    },
    History: [
      {
        timeStamp: {
          type: Number,
          default: Date.now,
        },
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId, // ✅ reference to User model
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const URL = mongoose.model("URL", urlSchema);

export default URL;
