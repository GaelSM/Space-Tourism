import "./Crew.css"
import { crew } from "../data.json"
import { useRef, useState, useEffect } from "react"
import { pageVariants, sliderDownToTop } from "../variants"
import { motion } from "framer-motion"

export default function Crew() {

    const [currentElement, setCurrentElement] = useState(0)

    const crewRef = useRef()

    useEffect(() => {
        const nodes = crewRef.current.querySelectorAll("li")

        nodes.forEach((el) => el.classList.remove("active"))
        nodes[currentElement].classList.add("active")
    }, [currentElement])

    return (
        <motion.section   
            className="crew"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{duration: .4, stiffness: 100}}
        >
            <h5> <span> 02 </span> Meet your crew </h5>
            <div className="slider">
                <div className="information">
                    <div className="top">
                        <h4> {crew[currentElement].role} </h4>
                        <h3> {crew[currentElement].name} </h3>
                        <p> {crew[currentElement].bio} </p>
                    </div>
                    <ul ref={crewRef}>
                        {
                            crew.map((_, index) => (
                                <li key={index} onClick={() => setCurrentElement(index)} />
                            ))
                        }
                    </ul>
                </div>
                <div className="image">
                    <motion.img 
                        src={crew[currentElement].images.webp} alt=""
                        initial="initial"
                        animate="animate"
                        variants={sliderDownToTop}
                        key={crew[currentElement].images.png}
                    />
                </div>
            </div>
        </motion.section>
    )
}
