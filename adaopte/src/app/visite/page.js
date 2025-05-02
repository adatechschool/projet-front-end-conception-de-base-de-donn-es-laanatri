"use client";

import SearchBar from "../components/organisms/searchbar";
import { useSearchParams } from "next/navigation";
import { useRef, useState, useEffect } from "react";

import Results from "../components/organisms/results";
import profiles from "../../../public/datas/profiles.json";

export default function Visite() {
    const searchParams = useSearchParams();
    const activite = searchParams ? searchParams.get("activite") : "Tous les moments possibles";
    const city = searchParams ? searchParams.get("city") ? searchParams.get("city").toLowerCase() : "" : "";

    // Récupére les profils
    const selectedProfiles = profiles.filter((profile) => {
        if (city === "" && profile["type"] === activite) {
            return true;
        } else if (
            activite === "Tous les moments possibles" &&
            profile["city"].toLowerCase().includes(city)
        ) {
            return true;
        } else if (
            profile["type"] === activite &&
            profile["city"].toLowerCase().includes(city)
        ) {
            return true;
        } else {
            return false;
        }
    });

    // Pagination
    let numberSelected = selectedProfiles.length;
    let numberPerPage = 10;
    let numberOfPages = Math.ceil(numberSelected / numberPerPage);

    const [currentPage, setCurrentPage] = useState(0);

    function displayPagnation() {
        let pagination = [];
        for (let i = 0; i < numberOfPages; i++) {
            pagination.push(i + 1);
        }
        return pagination;
    }
    
    function handlePages(e) {
      const page = e.target.dataset.page;
      setCurrentPage(Number(page));
    }

    //
    const resultsRef = useRef(null);
    const hasMounted = useRef(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (hasMounted.current) {
                if (resultsRef.current) {
                    const top =
                        resultsRef.current.getBoundingClientRect().top +
                        window.scrollY;
                    console.log(top);
                    window.scrollTo({ top: top - 100, behavior: "smooth" });
                }
            } else {
                hasMounted.current = true;
            }
        }, 0);
        return () => clearTimeout(timeout);
    }, [currentPage]);

    return (
        <>
            <section className="section-search">
                <SearchBar activite={activite} city={city} num={numberSelected}/>
            </section>

            <Results ref={resultsRef} npPage={numberPerPage} cPage={currentPage} sProfiles={selectedProfiles}/>

            <section className="section-pagination">
                <div className="pagination-cards">
                    <div className={currentPage === 0 ? "btn-pagination btn-prev inactif" : "btn-pagination btn-prev"} onClick={(e) => {setCurrentPage(currentPage - 1)}}>
                        <p >&laquo; Précédent</p>
                    </div>
                    {displayPagnation().map((p, i) => (
                        <div className={p - 1 === currentPage ? "active btn-page-numero" : "btn-page-numero"} key={i} data-page={p - 1} onClick={handlePages}>
                            <p>{p}</p>
                        </div>
                    ))}
                    <div className={currentPage === displayPagnation().length - 1 ? "btn-pagination btn-next inactif" : "btn-pagination btn-next"} onClick={(e) => {setCurrentPage(currentPage + 1)}}>
                        <p>Suivant &raquo;</p>
                    </div>
                </div>
            </section>
        </>
    );
}
