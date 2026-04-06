"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import "./ProjectsSlider.css";

type Project = {
  title: string;
  description: string;
  image: string;
  mobileImage?: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "E-Commerce Soccer Store",
    description: "Full-stack college project built with PHP and MySQL...",
    image: "/images/ciaol.jpg",
    mobileImage: "/images/ciaomob1.png",
    link: "#",
  },
  {
    title: "Cinema Website",
    description: "Full-stack cinema booking system using PHP and MySQL...",
    image: "/images/cinema1.png",
    mobileImage: "/images/cinemamob1.png",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio built with Next.js and animations.",
    image: "/projects/portfolio.jpg",
    link: "#",
  },
];
function ProjectCard({ project }: { project: Project }) {
  const [isMobile, setIsMobile] = useState(false);


useEffect(() => {
  if (!emblaApi) return;

  const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
  emblaApi.on("select", onSelect);

  return () => {
    if (emblaApi) {
      emblaApi.off("select", onSelect);
    }
  };
}, [emblaApi]);

  const imageSrc = isMobile && project.mobileImage ? project.mobileImage : project.image;

  return (
  <div className="project-card">
  <h2 className="project-title">{project.title}</h2>
  <div className={`device-wrapper ${isMobile ? "mobile-frame" : "laptop-frame"}`}>
    {isMobile && <div className="mobile-camera"></div>}
    <img src={imageSrc} alt={project.title} className="project-image" />
    
   
  </div>



      <p className="project-description">{project.description}</p>
      <a href={project.link} className="project-link">
        Read more →
      </a>
      <Link href="/Projects" className="see-all-link">
        See All Projects
      </Link>
    </div>
  );
}

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

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <div className="projects-section">
      <div className="section-container">
        <div className="section-header">
          <h1 className="main-title">PROJECTS</h1>
          <h2 className="sub-title">A Sample of my recent work</h2>
        </div>

        <div className="slider-wrapper">
    <button
  onClick={() => emblaApi?.scrollPrev()}
  disabled={!emblaApi}
  className="arrow-button arrow-left"
>
  <ChevronLeftIcon className="w-6 h-6" />
</button>

<button
  onClick={() => emblaApi?.scrollNext()}
  disabled={!emblaApi}
  className="arrow-button arrow-right"
>
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