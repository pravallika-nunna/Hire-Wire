import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARAY_CLOUD_NAME,
    api_key: process.env.CLOUDINARAY_API_KEY,
    api_secret: process.env.CLOUDINARAY_API_SECRET,

});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server listening at port ${process.env.PORT || 4000}`);
});






