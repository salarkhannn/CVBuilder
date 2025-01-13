import PersonalInforSection from "./PersonalInfoSection";
import EducationSection from "./EducationSections";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";

export default function Resume({ personalInfo, experience, education, skills }) {
  return (
    <div id="resume-container" className="resume-container flex flex-col w-1/2 bg-white p-10">
      <PersonalInforSection
        fullName={personalInfo.fullName}
        email={personalInfo.email}
        phoneNumber={personalInfo.phoneNumber}
        address={personalInfo.address}
      />
      <EducationSection education={education} />
      <ExperienceSection experience={experience} />
      <SkillsSection skills={skills} />
    </div>
  );
}
