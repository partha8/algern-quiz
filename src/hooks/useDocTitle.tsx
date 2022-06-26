import { useEffect, useState } from "react";

export const useDocTitle = (title: string) => {
  const [documentTitle, setDocumentTitle] = useState(title);
  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);

  return { documentTitle, setDocumentTitle };
};
