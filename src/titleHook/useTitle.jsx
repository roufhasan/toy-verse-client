import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Toys Verse | ${title}`;
  }, [title]);
};

export default useTitle;
