import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearch) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearch);
  }, [defaultSearch]);

  const search = async (query) => {
    const response = await youtube.get("/search", {
      params: {
        q: query,
      },
    });

    setVideos(response.data.items);
  };
  return [videos, search];
};

export default useVideos;
