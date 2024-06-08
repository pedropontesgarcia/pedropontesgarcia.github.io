"use client";

import { pdfjs } from "react-pdf";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

export default function Home() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div className="flex items-center justify-center font-sans sm:min-h-screen max-sm:h-96 bg-white text-black">
      <Document
        className={`m-24 mt-0 mb-0 max-sm:hidden ${
          numPages == 1 ? " shadow-2xl" : ""
        }`}
        file="/documents/resume.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page scale={1.5} pageNumber={pageNumber} />
      </Document>
      <div className="sm:hidden max-w-64 text-center">
        Could not load PDF.
        <br />
        Try{" "}
        <a
          className="underline transition-all hover:bg-black hover:text-white hover:no-underline"
          href="/documents/resume.pdf"
          download
        >
          downloading it
        </a>
        !
      </div>
    </div>
  );
}
