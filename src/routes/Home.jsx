import { Link } from "react-router-dom"
import "./Home.css"
import { motion } from "framer-motion"
import { pageVariants } from "../variants"


export default function Home() {
    return (
        <motion.section
            className="home"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{duration: .5, stiffness: 100}}
        >
            <article className="text">
                <h5> So, you want to travel to </h5>
                <h1> Space </h1>
                <p>
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                </p>
            </article>
            <Link className="explore" to={"/destination"}>
                <h4> Explore </h4>
            </Link>
            <div className="shadow"></div>
        </motion.section>
    )
}