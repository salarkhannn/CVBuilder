export default function ExperienceSection({experience}){
    return (
        <div className="w-100">
            <p className="section-heading ml-0">Experience</p>
            <hr></hr>
            <ul className="flex flex-col text-left">
                {experience.map((position, index) => (
                    <li className="flex flex-col pb-7" key={index}>
                        <div className="flex flex-row justify-between">
                            <li className="place font-bold">{position.place}</li>
                            <li className="time italic">{position.time}</li>
                        </div>
                        <li className="position font-bold">{position.position}</li>
                        <li className="description pl-5">{position.description}</li>    
                    </li>
                ))}
            </ul>
        </div>
    )
}