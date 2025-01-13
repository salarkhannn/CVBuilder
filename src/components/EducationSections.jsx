export default function EducationSection({education}){
    return (
        <div className="mt-5 w-100">
            <p className="section-heading ml-0">Education</p>
            <hr></hr>
            <ul className="flex flex-col text-left">
                {education.map((degree, index) => (
                    <li className="flex flex-col pb-5" key={index}>
                        <div className="flex flex-row justify-between">
                            <li className="institute">{degree.institute}</li>
                            <li className="place">{degree.location}</li>    
                        </div>
                        <div className="flex flex-row justify-between">
                            <li className="degree">{degree.degree}</li>
                            <li className="time-period italic">{degree.timePeriod}</li>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}