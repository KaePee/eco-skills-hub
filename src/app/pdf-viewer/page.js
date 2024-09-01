"use client";

import { useSearchParams } from "next/navigation";

const PdfViewer = () => {
  const searchParams = useSearchParams();
  const pdfUrl = searchParams.get("pdfUrl");

  if (!pdfUrl) {
    return <p>Loading...</p>;
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <iframe
        src={pdfUrl}
        width="80%"
        height="90%"
        className="border rounded-lg"
      />
    </div>
  );
};

export default PdfViewer;
