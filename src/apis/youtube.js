import axios from "axios";

const KEY = "AIzaSyAPIkXCGpst_vmbTQVy2Q_fXoOdMlls1RQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 50,
    key: KEY,
  },
});
