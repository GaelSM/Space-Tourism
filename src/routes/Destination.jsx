import "./Destination.css"
import { destinations } from "../data.json"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { pageVariants, sliderDownToTop } from "../variants"

export default function Destination() {

    const [currentElement, setCurrentElement] = useState(0)
    const destinationsRef = useRef()

    useEffect(() => {
        const nodes = destinationsRef.current.querySelectorAll("li")

        nodes.forEach((el) => el.classList.remove("active"))
        nodes[currentElement].classList.add("active")

    }, [currentElement])


    return (
        <motion.section 
            className="destination"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{duration: .4, stiffness: 100}}
        >
            <h5> <span> 01 </span> Pick your destination </h5>
            <article className="slider">
                <div className="left">
                        <motion.img
                            src={destinations[currentElement].images.png}
                            alt={`${destinations[currentElement].name} image`}
                            initial="initial"
                            animate="animate"
                            variants={sliderDownToTop}
                            key={destinations[currentElement].images.png}
                        />
                </div>
                <div className="right">
                    <nav>
                        <ul ref={destinationsRef}>
                            {
                                destinations.map(({ name }, index) => (
                                    <li key={index} onClick={() => setCurrentElement(index)}> {name} </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <h2> {destinations[currentElement].name} </h2>
                    <p className="text"> {destinations[currentElement].description} </p>
                    <div className="line" />
                    <footer>
                        <div>
                            <p className="h7"> Avg. Distance </p>
                            <h6> {destinations[currentElement].distance} </h6>
                        </div>
                        <div>
                            <p className="h7"> Est. Travel time </p>
                            <h6> {destinations[currentElement].travel}</h6>
                        </div>
                    </footer>
                </div>
            </article>
        </motion.section>
    )
}