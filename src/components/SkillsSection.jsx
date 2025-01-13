export default function SkillsSection({skills}){
    return (
        <div className="mt-5 w-100">
            <p className="section-heading ml-0">Skills</p>
            <hr></hr>
            <ul className="flex flex-col text-left">
                {skills.map((skill, index) => (
                    <li className="flex flex-col" key={index}>
                        <div className="flex flex-row">
                            <li className="pr-5">{skill.name}:</li>        
                            <li className="">{skill.level}</li>        
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}