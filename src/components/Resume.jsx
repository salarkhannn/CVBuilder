import PersonalInforSection from "./PersonalInfoSection";
import EducationSection from "./EducationSections";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";

export default function Resume({ personalInfo, experience, education, skills }) {
  return (
    <div id="resume-container" className="resume-container flex flex-col w-4/12 bg-white p-4">
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
