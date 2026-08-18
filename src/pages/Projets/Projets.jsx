import './Projets.scss'
import { useRef, useEffect, useState } from 'react'
import projets from '/src/data/listeProjetsPortfolio.json'
import CardProjet from '../../components/CardProjet/CardProjet'
import { animate } from "motion";

export default function Projets() {

    const pathRef = useRef(null);
    const [count, setCount] = useState(1);


    /////////////////////////////////////////////////
    //   Gestion event fleches pour scroll auto.   //
    /////////////////////////////////////////////////
    const cardScrollStep = [3150, 1950, 1950, 1950, 2300];

    useEffect(() => {

        const handleKeyDown = (event) => {

            if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                event.preventDefault();

                if (count >= 6) return;

                const step = cardScrollStep[count - 1];

                console.log("Projet actuel :", count);
                console.log("Scroll de :", step);

                setCount(count + 1);

                animate(
                    window.scrollY,
                    window.scrollY + step,
                    {
                        duration: 1,
                        ease: "easeInOut",
                        onUpdate: (latest) => {
                            window.scrollTo(0, latest);
                        }
                    }
                );
            }

            if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                event.preventDefault();

                if (count <= 1) return;

                const step = cardScrollStep[count - 2];

                console.log("Projet actuel :", count);
                console.log("Scroll de :", step);

                setCount(count - 1);

                animate(
                    window.scrollY,
                    window.scrollY - step,
                    {
                        duration: 1,
                        ease: "easeInOut",
                        onUpdate: (latest) => {
                            window.scrollTo(0, latest);
                        }
                    }
                );
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };

    }, [count]);

    return (
        <section className="projets">

            <svg
                className="trajectory"
                viewBox="0 0 1000 1000"
                preserveAspectRatio="none"
            >
                <path
                    ref={pathRef}
                    d="M828.5,833.5c0,0 -357.16213,-80.76513 -355.66423,-370.74104c19.95279,-293.77956 -311.69525,-273.59273 -315.33577,-278.25895"
                />
            </svg>

            <div className="cards-container">

                {projets.map((projet) => (

                    <CardProjet
                        key={projet.id}
                        id={projet.id}
                        pathRef={pathRef}
                    />

                ))}

            </div>

        </section>
    )
}