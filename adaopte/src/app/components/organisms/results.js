'use client'

import { forwardRef } from 'react';

import ProfileCard from "../../components/molecules/profilecard";

const Results = forwardRef(function Results(props, ref) {
    return (
        <>
            <section className="section-results" ref={ref}>
                {props.sProfiles.map((profile, index) => {
                    if (
                        index >= props.npPage * props.cPage &&
                        index < props.npPage * (props.cPage + 1)
                    ) {
                        return <ProfileCard props={profile} key={index} />;
                    }
                    return null;
                })}
            </section>
        </>
    );
})

export default Results;

// export default function Results(props) {

//     // const [page, setPage] = useState(props.cpage);

//     return (
//         <>
//             <section className="section-results" ref={props.refElement}>
//                 {props.sProfiles.map((profile, index) => {
//                     if (
//                         index >= props.npPage * props.cPage &&
//                         index < props.npPage * (props.cPage + 1)
//                     ) {
//                         return <ProfileCard props={profile} key={index} />;
//                     }
//                 })}
//             </section>
//         </>
//     );
// }
