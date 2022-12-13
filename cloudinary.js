import Vue from "vue";
import Cloudinary from "cloudinary-vue";

Vue.use(Cloudinary, {
  configuration: { cloudName: process.env.VUE_APP_CLOUDINARY_CLOUD_NAME },
  secure: true,
});
