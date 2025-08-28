import React from "react";
import description from "../mockdata/description.txt?raw";

export default function DownloadDescription() {
  const downloadDoc = (as = "doc") => {
    const mime =
      as === "doc" ? "application/msword" : "text/plain;charset=utf-8";
    const blob = new Blob([description], { type: mime });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download =
      as === "doc"
        ? "ChicLighting_ProjectDescription.doc"
        : "ChicLighting_ProjectDescription.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container my-4 text-center" id="download">
      <h3 className="fw-bold mb-3">Download Project Description</h3>
      <p className="text-muted mb-4">
        Get a copy of the Chic Lighting project description in your preferred
        format.
      </p>

      <div className="d-flex justify-content-center gap-3 flex-wrap">
        <button
          className="btn btn-warning px-4"
          onClick={() => downloadDoc("doc")}
        >
          📄 Download as .DOC
        </button>
        <button
          className="btn btn-outline-light px-4"
          onClick={() => downloadDoc("txt")}
        >
          📑 Download as .TXT
        </button>
      </div>

      <div className="mt-3 text-muted small">
        💡 Tip: You can also print this page to save it as a PDF.
      </div>
    </div>
  );
}
