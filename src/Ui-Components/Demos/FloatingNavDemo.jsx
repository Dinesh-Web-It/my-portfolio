import React from "react"
import { FloatingNav } from "../components/floating-navbar"
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Skills",
      link: "/skills",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Resume",
      link: "/resume",
    },
    {
      name: "Contact Us",
      link: "/contact",
    }
  ]
  return (
    <div className=" float relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  )
}
