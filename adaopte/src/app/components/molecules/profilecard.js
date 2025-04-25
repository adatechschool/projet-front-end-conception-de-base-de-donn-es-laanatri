import Button from "../atoms/button";

import Image from 'next/image';

const btnProfileCard = {
    id: 1,
    name: "Programmer un moment",
    icon: "",
    route: "/"
}

export default function ProfileCard({props}) {

    return (
        <div className="profile-cards">
            <div className="img-content">
                <Image src={props.imageUrl} width={200} height={50} alt={"photo de " + props.firstname}/>
            </div>
            <div className="txt-content">
                <div className="txt-profile">
                    <p className="activite">{props.type}</p>
                    <p className="firstname">{props.firstname}</p>
                    <p className="infos">{props.job} &#x2022; {props.age}</p>
                    <p className="city">{props.city}</p>
                    <p className="description">{props.description}</p>
                </div>
                <Button link={btnProfileCard}/>
            </div>
        </div>
    )
}