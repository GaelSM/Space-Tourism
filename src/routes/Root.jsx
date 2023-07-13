import { Link, Outlet, useLocation } from "react-router-dom"
import Home from "./Home"
import logo from "../assets/shared/logo.svg"
import "./Root.css"
import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"


export default function Root() {

  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
  }, [pathname])

  const handleClick = () => setIsOpen(prev => !prev)

  return (
    <main>
      <header>
        <img src={logo} alt="Logo" />
        <div className={isOpen ? "hamburger animate" : "hamburger"} onClick={handleClick}>
          <span className="first"></span>
          <span className="second"></span>
          <span className="last"></span>
        </div>
        <div className={`rectangle ${pathname !== "/" ? "active" : ""}`}></div>
        <nav className={isOpen ? "open" : ""}>
          <ul >
            <li>
              <Link
                to={"/"}
                className={pathname === "/" ? "active" : ""}
              >
                <span> 00 </span> Home
              </Link>
            </li>
            <li>
              <Link
                to={"/destination"}
                className={pathname === "/destination" ? "active" : ""}
              >
                <span> 01 </span> Destination
              </Link>
            </li>
            <li>
              <Link
                to={"/crew"}
                className={pathname === "/crew" ? "active" : ""}
              >
                <span> 02 </span> Crew
              </Link>
            </li>
            <li>
              <Link
                to={"/technology"}
                className={pathname === "/technology" ? "active" : ""}
              >
                <span> 03 </span> Technology
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <AnimatePresence>
        {
          pathname !== "/" ? <Outlet /> : <Home />
        }
      </AnimatePresence>
    </main>
  )
}