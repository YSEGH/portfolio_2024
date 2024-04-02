import React from "react";
import styles from "./ListProject.module.css";
import Project from "../Project/Project";
import ListFilter from "../ListFilter/ListFilter";

type Props = {};

const ListProject = ({}: Props) => {
  return (
    <div className={styles["list-project"]}>
      <ListFilter />
      <div className={styles["list-wrapper"]}>
        {projects.map((project: Project, i: number) => (
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
  },
  {
    title: "Praesent porttitor nulla",
    github: "#",
    link: "#",
  },
  {
    title: "Praesent porttitor nulla",
    github: "#",
    link: "#",
  },
  {
    title: "Praesent porttitor nulla",
    github: "#",
    link: "#",
  },
  {
    title: "Praesent porttitor nulla",
    github: "#",
    link: "#",
  },
  {
    title: "Praesent porttitor nulla",
    github: "#",
    link: "#",
  },
  {
    title: "Praesent porttitor nulla",
    github: "#",
    link: "#",
  },
  {
    title: "Praesent porttitor nulla",
    github: "#",
    link: "#",
  },
];

export interface Project {
  title: string;
  github: string;
  link: string;
}
