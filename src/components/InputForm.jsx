import { useEffect } from "react";
import "../index.css"

export default function InputForm({ data, setData }) {
  // Save form data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, [setData]);

  // Handle personal info changes
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        [name]: value,
      },
    }));
  };

  // Handle experience changes
  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperience = [...data.experience];
    updatedExperience[index] = { ...updatedExperience[index], [name]: value };
    setData((prevData) => ({
      ...prevData,
      experience: updatedExperience,
    }));
  };

  // Add a new experience
  const addExperience = () => {
    setData((prevData) => ({
      ...prevData,
      experience: [
        ...prevData.experience,
        { place: "", position: "", time: "", description: "" },
      ],
    }));
  };

  // Delete an experience
  const deleteExperience = (index) => {
    const updatedExperience = data.experience.filter((_, i) => i !== index);
    setData((prevData) => ({
      ...prevData,
      experience: updatedExperience,
    }));
  };

  // Handle education changes
  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = [...data.education];
    updatedEducation[index] = { ...updatedEducation[index], [name]: value };
    setData((prevData) => ({
      ...prevData,
      education: updatedEducation,
    }));
  };

  // Add a new education
  const addEducation = () => {
    setData((prevData) => ({
      ...prevData,
      education: [
        ...prevData.education,
        { institute: "", timePeriod: "", location: "", degree:"" },
      ],
    }));
  };

  // Delete an education
  const deleteEducation = (index) => {
    const updatedEducation = data.education.filter((_, i) => i !== index);
    setData((prevData) => ({
      ...prevData,
      education: updatedEducation,
    }));
  };

  // handle skills change
  const handleSkillChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSkills = [...data.skills];
    updatedSkills[index] = {...updatedSkills[index], [name]: value };
    setData((prevData) => ({
      ...prevData,
      skills: updatedSkills,
    }));
  };

  // add new skill
  const addSkill = () => {
    setData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, { name: "", level: "" }],
    }));
  };

  // delete a skill
  const deleteSkill = (index) => {
    const updatedSkill = data.skills.filter((_, i) => i !== index);
    setData((prevData) => ({
      ...prevData,
      skills: updatedSkill,
    }));
  };

  return (
    <div className="form-container pr-20">
      <form className="flex flex-col">
        <h3 className="text-red-500">Personal Information</h3>
        <label>Your Name:</label>
        <input
          type="text"
          name="fullName"
          placeholder="Your name"
          value={data.personalInfo.fullName || ""}
          onChange={handlePersonalInfoChange}
          className="input-fields"
        />

        <label>Email:</label>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={data.personalInfo.email || ""}
          onChange={handlePersonalInfoChange}
          className="input-fields"
        />

        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          placeholder="phone number"
          value={data.personalInfo.phoneNumber || ""}
          onChange={handlePersonalInfoChange}
          className="input-fields"
        />

        <label>Address:</label>
        <input
          type="text"
          name="address"
          placeholder="address"
          value={data.personalInfo.address || " "}
          onChange={(e) => handlePersonalInfoChange(e)}
          className="input-fields"
        />

        <h3 className="text-red-500">Education</h3>
        {data.education.map((edu, index) => (
          <div key={index} className="education-section flex flex-col">
            <label>Institute:</label>
            <input
              type="text"
              name="institute"
              placeholder="Institute"
              value={edu.institute || ""}
              onChange={(e) => handleEducationChange(index, e)}
              className="input-fields"
            />

            <label>Time Period:</label>
            <input
              type="text"
              name="timePeriod"
              placeholder="Time Period"
              value={edu.timePeriod || ""}
              onChange={(e) => handleEducationChange(index, e)}
              className="input-fields"
            />

            <label>Location:</label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={edu.location || ""}
              onChange={(e) => handleEducationChange(index, e)}
              className="input-fields"
            />
            <label>Degree:</label>
            <input
              type="text"
              name="degree"
              placeholder="degree"
              value={edu.degree || ""}
              onChange={(e) => handleEducationChange(index, e)}
              className="input-fields"
            />

            <button className="border border-black p-2" type="button" onClick={() => deleteEducation(index)}>
              Delete Education
            </button>
          </div>
        ))}
        <button className="border border-black p-2" type="button" onClick={addEducation}>
          Add Education
        </button>
        
        <h3 className="text-red-500">Experience</h3>
        {data.experience.map((exp, index) => (
          <div key={index} className="experience-section flex flex-col">
            <label>Place:</label>
            <input
              type="text"
              name="place"
              placeholder="Place"
              value={exp.place || ""}
              onChange={(e) => handleExperienceChange(index, e)}
              className="input-fields"
            />

            <label>Position:</label>
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={exp.position || ""}
              onChange={(e) => handleExperienceChange(index, e)}
              className="input-fields"
            />

            <label>Time:</label>
            <input
              type="text"
              name="time"
              placeholder="Time"
              value={exp.time || ""}
              onChange={(e) => handleExperienceChange(index, e)}
              className="input-fields"
            />

            <label>Description:</label>
            <textarea
              name="description"
              placeholder="Description"
              value={exp.description || ""}
              onChange={(e) => handleExperienceChange(index, e)}
              className="input-fields"
            ></textarea>

            <button className="border border-black p-2" type="button box-border" onClick={() => deleteExperience(index)}>
              Delete Experience
            </button>
          </div>
        ))}
        <button className="border border-black p-2" type="button" onClick={addExperience}>
          Add Experience
        </button>
        
        <h3 className="text-red-500">Skills Section</h3>
        {data.skills.map((skill, index) => (
          <div key={index} className="skills-section flex flex-col">
            <label>Skill</label>
            <input
              type="text"
              name="name"
              placeholder="Skill"
              value={skill.name || ""}
              onChange={(e) => handleSkillChange(index, e)}
              className="input-fields"
            >
            </input>
            <label>Level</label>
            <input
              type="text"
              name="level"
              placeholder="Skill level"
              value={skill.level || ""}
              onChange={(e) => handleSkillChange(index, e)}
              className="input-fields"
            ></input>

            <button className="border border-black p-2" type="button box-border" onClick={() => deleteSkill(index)}>
              Delete Skill
            </button>
          </div>
        ))}
        <button className="border border-black p-2" type="button" onClick={addSkill}>
          Add Skill
        </button>

      </form>
    </div>
  );
}
