import "../index.css"

export default function PersonalInforSection({fullName, email, phoneNumber, address}){
    return (
        <div className="flex flex-col items-center">
            <p className="full-name">{fullName}</p>
            <hr></hr>
            <p className="email ">{email}</p>
            <div className="flex flex-row">
                <p className="phone-number pr-10">{phoneNumber}</p>
                <p className="address">{address}</p>
            </div>
        </div>
    )
}