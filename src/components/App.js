import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import user from "../data/user";

const projects = [
  { id: 1, name: "Project One", technologies: ["React", "JavaScript"] },
  { id: 2, name: "Project Two", technologies: ["HTML", "CSS"] },
  { id: 3, name: "Project Three", technologies: ["Node.js", "Express"] },
];

function App() {
  return (
    <div>
      <NavBar />
      <Home username={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
      <ProjectList projects={user.projects} />
    </div>
  );
}

export default App;
