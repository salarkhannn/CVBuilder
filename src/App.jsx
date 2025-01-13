import { useEffect, useState } from "react";
import "./App.css";
import Resume from "./components/Resume";
import InputForm from "./components/InputForm";
import defaultData from "./default-data";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  // const [data, setData] = useState(defaultData); // Single state for all data
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : defaultData;
  });

  // save data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(data));
  }, [data]);

  const downloadPDF = async () => {
    const element = document.getElementById("resume-container");
    const canvas = await html2canvas(element, { scale: 2});
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  }

  return (
    <div className="flex flex-row justify-center min-h-screen w-full">
      <div className="">
        <h2>Input fields</h2>
        <InputForm data={data} setData={setData} />
        <button
          onClick={downloadPDF}
          className="mt-4 p-2 bg-blue-500 test-white rounded"
        >
          Download Resume as PDF
        </button>
      </div>
      <Resume
        personalInfo={data.personalInfo}
        experience={data.experience}
        education={data.education}
        skills={data.skills}
      />
    </div>
  );
}

export default App;
