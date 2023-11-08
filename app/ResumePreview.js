"use client";

import ResumeHeader from "@/components/ResumeEditor/ResumeHeader";
import EducationSection from "@/components/ResumeEditor/EducationSection";
import ExperienceSection from "@/components/ResumeEditor/ExperienceSection";
import CertificateSection from "@/components/ResumeEditor/CertificateSections";
import TalentSection from "@/components/ResumeEditor/TalentSection";
import ProjectSection from "@/components/ResumeEditor/ProjectSection";
import { Button } from "@/components/ui/button";
import html2pdf from "html2pdf.js";
import { useRef, useState } from "react";
//import { saveAs } from "file-saver";
//import { Packer } from "docx";
//import DocumentCreator from "@/components/ResumeComponents/ResumeDocsFormatter/generateDocx";
// import { PDFViewer } from "@react-pdf/renderer";
// import Document from "@/components/ResumeComponents/ReactPDF/index";
//import { saveLocally } from "./storeLocally";

export default function ResumePreview({ resumeId = "default", email = "" }) {
  const elementRef = useRef(null);
  const downloadPDF = () => {
    var element = document.getElementById("element-to-print");
    var opt = {
      margin: 0.5,
      filename: "resume.pdf",
      html2canvas: { scale: 2 },
      pagebreak: { mode: ["avoid-all"] },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <main className="sticky top-0 w-full h-full flex flex-col justify-center bg-gray-200 p-4">
      <div className="w-full flex justify-right space-x-4 mb-2">
        <Button
          className="w-24 flex space-x-2"
          onClick={() => {
            downloadPDF();
          }}
        >
          SAVE PDF
        </Button>
      </div>

      {/* <PDFViewer style={{ flex: 1 }}>
        <Document />
      </PDFViewer> */}
      {/* style={{ width: "595px" }} */}
      <div
        className="py-12 relative bg-white w-full h-full"
        style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
      >
        <div
          className="relative bg-white mx-auto h-full overflow-y-auto font-serif leading-tight text-center align-middle"
          id="element-to-print"
          ref={elementRef}
        >
          <ResumeHeader resumeHeaderID={`resumeHeader-${email}-${resumeId}`} />
          <EducationSection educationID={`educations-${email}-${resumeId}`} />
          <CertificateSection
            certificateID={`certificates-${email}-${resumeId}`}
          />
          <ExperienceSection
            experienceID={`experiences-${email}-${resumeId}`}
          />
          <ProjectSection projectId={`projects-${email}-${resumeId}`} />
          <TalentSection talentsID={`talents-${email}-${resumeId}`} />
        </div>
      </div>
    </main>
  );
}
