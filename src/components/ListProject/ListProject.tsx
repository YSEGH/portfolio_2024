"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./ListProject.module.css";
import Project from "../Project/Project";
import ListFilter from "../ListFilter/ListFilter";
import ScrollBar from "../ScrollBar/ScrollBar";

type Props = {};

const ListProject = ({}: Props) => {
  const containerRef = useRef(null);

  const [filters, setFilters] = useState<string[]>([]);

  const setFiltersHandler = (filter: string) => {
    setFilters((previousState) => {
      const filterExist = filters.some((x) => x === filter);
      if (filterExist) {
        return previousState.filter((x) => x !== filter);
      }
      return [...previousState, filter];
    });
  };

  const filteredProjects = projects.filter((project) => {
    if (filters.length === 0) {
      return true;
    }
    return filters.every((filter) => project.tags.includes(filter));
  });

  return (
    <div className={styles["list-project"]}>
      <ListFilter setFilters={setFiltersHandler} activeFilters={filters} />
      <div className={styles["list-wrapper"]} ref={containerRef}>
        <ScrollBar container={containerRef} background="var(--white)" />
        {filteredProjects.map((project: Project, i: number) => (
          <Project
            key={`${i}-${project.title}`}
            title={project.title}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
};

export default ListProject;

const projects: Project[] = [
  {
    title: "Praesent porttitor nulla",
    github: "#",
    link: "#",
    tags: ["React", "Typescript", "ThreeJS"],
  },
  {
    title: "Praesent porttitor nulla",
    github: "#",
    link: "#",
    tags: ["React", "Drupal", "Typescript"],
  },
  {
    title: "Praesent porttitor nulla",
    github: "#",
    link: "#",
    tags: ["React", "Drupal", "ThreeJS"],
  },
  {
    title: "Praesent porttitor nulla",
    github: "#",
    link: "#",
    tags: ["React", "Drupal", "Typescript", "ThreeJS"],
  },
  {
    title: "Praesent porttitor nulla",
    github: "#",
    link: "#",
    tags: ["Drupal", "Typescript", "ThreeJS"],
  },
  {
    title: "Praesent porttitor nulla",
    github: "#",
    link: "#",
    tags: ["Drupal", "ThreeJS"],
  },
  {
    title: "Praesent porttitor nulla",
    github: "#",
    link: "#",
    tags: ["React", "ThreeJS"],
  },
  {
    title: "Praesent porttitor nulla",
    github: "#",
    link: "#",
    tags: ["Typescript", "ThreeJS"],
  },
];

export interface Project {
  title: string;
  github: string;
  link: string;
  tags: string[];
}
