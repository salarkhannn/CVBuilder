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
    // <div className="flex flex-row justify-center min-h-screen w-full">
    //   <div className="flex flex-col w-1/3">
    //     <h2>Input fields</h2>
    //     <InputForm data={data} setData={setData} />
    //     <button
    //       onClick={downloadPDF}
    //       className="mt-4 p-2 bg-blue-500 test-white rounded"
    //     >
    //       Download Resume as PDF
    //     </button>
    //   </div>
    //   <Resume
    //     personalInfo={data.personalInfo}
    //     experience={data.experience}
    //     education={data.education}
    //     skills={data.skills}
    //   />
    // </div>

  return (
    <div className="flex flex-row justify-center min-h-screen w-full gap-8 bg-gray-50 p-8">
      <div className="flex flex-col w-1/4 min-w-[300px]">
        <h2 className="text-3xl font-bold mb-6 font-sans">Resume Builder</h2>
        <InputForm data={data} setData={setData} />
        <button
          onClick={downloadPDF}
          className="mt-6 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-md"
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
