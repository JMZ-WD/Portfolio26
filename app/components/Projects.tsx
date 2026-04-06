"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import "./ProjectsSlider.css";

// 1️⃣ Define Project type
type Project = {
  title: string;
  description: string;
  image: string;
  mobileImage?: string;
  link: string;
};

// 2️⃣ Define the projects array at **module scope**
const projects: Project[] = [
  {
    title: "E-Commerce Store",
    description: "Developed a dynamic online football store as college project using PHP and MySQL, featuring a fully functional shopping cart, secure checkout, and order confirmation pages. Built an admin panel to manage products, stock, and users. Designed a minimalist, responsive layout to showcase products effectively across all devices.",
    image: "/images/ciaol.jpg",
    mobileImage: "/images/ciaomob1.png",
    link: "#",
  },
  {
    title: "Cinema Website",
    description: "Developed a dynamic cinema website as college project using PHP and MySQL, featuring session management for different age groups and admin roles. Built a fully functional admin panel to manage cinema listings and users, with the ability to add, edit, or delete entries. Implemented an online ticket booking system generating QR codes for tickets. Designed reusable PHP database templates to streamline content management from the admin panel.",
    image: "/images/cinema1.png",
    mobileImage: "/images/cinemamob1.png",
    link: "#",
  },
  {
    title: "Business Website",
    description: "Designed a sleek, fully responsive site for Edinburgh Poster Distribution to showcase the company’s work, events, and custom services. Implemented effective SEO strategies, achieving #1 rankings on Google and maximizing online visibility.",
    image: "/projects/portfolio.jpg",
    link: "#",
  },
];

// 3️⃣ ProjectCard component with Read More
function ProjectCard({ project }: { project: Project }) {
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageSrc = isMobile && project.mobileImage ? project.mobileImage : project.image;

  const toggleExpanded = () => setExpanded(!expanded);
  const previewText = project.description.slice(0, 70); // show first 70 chars

  return (
    <div className="project-card">
      <h2 className="project-title">{project.title}</h2>
      <div className={`device-wrapper ${isMobile ? "mobile-frame" : "laptop-frame"}`}>
        {isMobile && <div className="mobile-camera"></div>}
        <img src={imageSrc} alt={project.title} className="project-image" />
      </div>

    <p className="project-description">
  {expanded ? project.description : `${previewText}...`}
  {project.description.length > 70 && (
    <span
      onClick={toggleExpanded}
      style={{ fontWeight: "bold", cursor: "pointer", marginLeft: "4px" }}
    >
      {expanded ? "Minimise" : "Read More"}
    </span>
  )}
</p>
      <a href={project.link} className="project-link">View Website →</a>
      <Link href="/Projects" className="see-all-link">See All Projects</Link>
    </div>
  );
}

// 4️⃣ ProjectsSlider component
export default function ProjectsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center", loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      if (emblaApi) emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="projects-section">
      <div className="section-container">
        <div className="section-header">
          <h1 className="main-title">PROJECTS</h1>
          <h2 className="sub-title">A Sample of my recent work</h2>
        </div>

        <div className="slider-wrapper">
          <button onClick={scrollPrev} disabled={!emblaApi} className="arrow-button arrow-left">
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button onClick={scrollNext} disabled={!emblaApi} className="arrow-button arrow-right">
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="slider-inner">
              {projects.map((project, index) => {
                const isActive = index === selectedIndex;
                return (
                  <div key={index} className="slider-item">
                    <div className={isActive ? "slider-item-active" : "slider-item-inactive"}>
                      <ProjectCard project={project} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}