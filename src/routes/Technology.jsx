import { technology as data } from "../data.json"
import { useState, useEffect, useRef } from "react"
import "./Technology.css"
import { motion } from "framer-motion"
import { pageVariants, sliderRightToLeft } from "../variants"

export default function Technology() {

    const [currentElement, setCurrentElement] = useState(0)
    const [landscape, setLandscape] = useState(false)

    const dataRef = useRef()

    useEffect(() => {
        if(screen.width > 0 && screen.width < 1360) setLandscape(true)

        const  setLandscapeImage = (e) => {
            const {innerWidth} = e.target
            if(innerWidth > 0 && innerWidth < 1360) setLandscape(true)
            else setLandscape(false)
        }

        window.addEventListener("resize", setLandscapeImage)

        return () => window.removeEventListener("resize", setLandscapeImage)
    }, [])

    useEffect(() => {
        const nodes = dataRef.current.querySelectorAll("li")

        nodes.forEach((el) => el.classList.remove("active"))
        nodes[currentElement].classList.add("active")
    }, [currentElement])

    return (
        <motion.section 
            className="technology"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{duration: .4, stiffness: 100}}
        >
            <h5> <span> 03 </span> Space launch 101 </h5>
            <div className="slider">
                <div className="img">
                    <motion.img 
                        src={landscape ? data[currentElement].images.landscape : data[currentElement].images.portrait} 
                        alt=""
                        initial="initial"
                        animate="animate"
                        variants={sliderRightToLeft}
                        key={landscape ? data[currentElement].images.landscape : data[currentElement].images.portrait}
                    />
                </div>
                <div className="bottom">
                    <ul ref={dataRef}>
                        {
                            data.map((_, index) => (
                                <li key={index} onClick={() => setCurrentElement(index)}> <h4> {index + 1} </h4> </li>
                            ))
                        }
                    </ul>
                    <div className="information">
                        <p className="h7"> The terminology...</p>
                        <h3> {data[currentElement].name} </h3>
                        <p> {data[currentElement].description} </p>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}