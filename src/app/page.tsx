"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";

import Bottom from "@/app/components/bottom";
import Connect from "@/app/components/connect";
import ProjectCard from "@/app/components/project-card";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { AuthContext } from "@/app/authContext";
import {
  handleCursorHoverStart,
  handleCursorHoverStartText,
  handleCursorHoverStop,
} from "./cursor";

const PW = "3b88f67c08e845d18c35519556b73bad9ad2cefde2005e7372820fcadb270e78";

async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default function Home() {
  const footerRef = useRef<HTMLDivElement>(null);
  const isFooterVisible = useIntersectionObserver(footerRef);
  const router = useRouter();

  const [authVisible, setAuthVisible] = useState(false);
  const [password, setPassword] = useState("");
  const { setAuthed } = useContext(AuthContext);
  const [isInvalid, setIsInvalid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const showAuthModal = () => {
    setAuthVisible(true);
  };

  const handleOverlay = () => {
    setAuthVisible(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.length === 0) {
      setIsInvalid(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hash = await sha256(password);
    if (hash === PW) {
      setAuthVisible(false);
      setAuthed(true);
      router.push("/projects/tochigami");
    } else {
      setIsInvalid(true);
    }
  };

  useEffect(() => {
    document.body.style.overflow = authVisible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [authVisible]);

  return (
    <main className="bg-white">
      {authVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 h-[100vh] w-[100vw] flex items-center justify-center"
          onClick={handleOverlay}
        >
          <div
            className="w-[720px] h-[350px] rounded-[50px] p-[60px] bg-white space-y-[30px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-[10px] text-center">
              <Image
                src="/icons/lock-2.svg"
                alt="lock"
                width={50}
                height={50}
                className="mx-auto"
              />
              <div className="text-[27px] font-semibold tracking-[.01em]">
                This page requires a password
              </div>
              <div className="text-[18px] tracking-[.01em]">
                Please contact me at <u>nozawa.myk@gmail.com</u> to request
                access
              </div>
            </div>
            <form onSubmit={handleSubmit} className="flex space-x-[10px]">
              <div
                className="relative w-full"
                onMouseEnter={handleCursorHoverStartText}
                onMouseLeave={handleCursorHoverStop}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  className={`w-full px-[20px] py-[15px] rounded-[10px] border-[1px] outline-none ${
                    isInvalid
                      ? "border-red-500 border-[2px]"
                      : "border-gray-300"
                  } cursor-text`}
                  placeholder="Enter password"
                  onChange={handleChange}
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-[55px] top-1/2 -translate-y-1/2"
                  onMouseEnter={handleCursorHoverStart}
                  onMouseLeave={handleCursorHoverStartText}
                >
                  <Image
                    src="/icons/eye.png"
                    alt="toggle password visibility"
                    width={20}
                    height={20}
                    className={showPassword ? "" : "opacity-50"}
                  />
                </button>
              </div>
              <button
                className={
                  "rounded-[10px] bg-dark-brown text-white px-[20px] py-[10px] " +
                  "flex items-center justify-center"
                }
              >
                ENTER
              </button>
            </form>
          </div>
        </div>
      )}
      {/* Hero */}
      <div className="px-[60px] pt-[30px] pb-[120px] rounded-b-[60px] lg:rounded-b-[200px] w-full bg-base">
        <div className="space-y-[2.5vw] lg:space-y-[30px] text-center lg:max-w-[890px] mx-auto">
          <Image
            className="mx-auto w-[25vw] h-[25vw] lg:w-[210px] lg:h-[210px]"
            src="/home/profile.png"
            alt="me"
            width={210}
            height={210}
          />
          <div className="space-y-[1vw] lg:space-y-5">
            <div className="font-bold text-[8.3vw] tracking-[.01em] lg:text-[80px] lg:leading-[120px] lg:tracking-[.05em]">
              Miyuki Nozawa
            </div>
          </div>
          <div
            className={
              "pt-0 font-medium text-[4.6vw] lg:text-[36px] " +
              "tracking-[.01em] text-[#222222] text-center"
            }
          >
            I am a <span className="font-semibold">Product Designer</span> based
            in New York
          </div>
        </div>
      </div>
      <div id="work">
        {/* Pibu */}
        <ProjectCard
          tags={["E-commerce", "Responsive Design"]}
          title="Pibu"
          subtitle="Skincare Store Website"
          description="A website to introduce a local business and expand their business"
          img="/home/pibu.png"
          page="/projects/pibu"
        />
      </div>
      {/* Tochigami */}
      <ProjectCard
        tags={["Web App", "Add a feature", "Redesign"]}
        title="Tochigami"
        subtitle="Real Estate Agent Finder"
        description="A web app to match users with the right real estate agents and help them find their ideal home"
        img="/home/tochigami.png"
        page="/projects/tochigami"
        mirror
        locked
        action={showAuthModal}
      />
      {/* Resto */}
      <ProjectCard
        tags={["Mobile", "End-to-end", "Personal Project"]}
        title="Resto"
        subtitle="Dining App in Japan"
        description="A mobile app that simplifies restaurant discovery and reservations for travelers in Japan"
        img="/home/resto.png"
        page="/projects/resto"
      />
      {/* Korean Air */}
      <ProjectCard
        tags={["Web App", "Add a feature", "Personal Project"]}
        title="Korean Air"
        subtitle="Mileage Optimizer"
        description="A feature that enables effective utilization of mileage"
        img="/home/korean-air.png"
        page="/projects/korean-air"
        mirror
      />
      {/* Kama-Asa */}
      <ProjectCard
        tags={["E-commerce", "Redesign", "Responsive Design"]}
        title="KAMA-ASA"
        subtitle="New US Online Store"
        description="An e-commerce platform redesigned for the US market"
        img="/home/kama-asa.png"
        page="/projects/kama-asa"
        disabled
      />
      {/* Footer */}
      <Bottom ref={footerRef} visible={isFooterVisible}>
        <Connect />
      </Bottom>
    </main>
  );
}
