import Image from "next/image";
import NavLink from "@/app/components/nav-link";

export default function Footer() {
  return (
    <div className="flex justify-between items-center p-16">
      <Image
        src="/icons/nav.svg"
        alt="miyuki nozawa"
        width={155}
        height={105}
      />
      <div className="flex space-x-[4.5rem] font-light">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/resume">Resume</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </div>
    </div>
  );
}
