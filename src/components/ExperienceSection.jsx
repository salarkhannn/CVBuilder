export default function ExperienceSection({experience}){
    return (
        <div className="mt-5 w-100">
            <p className="section-heading ml-0">Experience</p>
            <hr></hr>
            <ul className="flex flex-col text-left">
                {experience.map((position, index) => (
                    <li className="flex flex-col" key={index}>
                        <div className="flex flex-row justify-between">
                            <li className="place">{position.place}</li>
                            <li className="time">{position.time}</li>
                        </div>
                        <li className="position">{position.position}</li>
                        <li className="description">{position.description}</li>    
                    </li>
                ))}
            </ul>
        </div>
    )
}