import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/UI/header";
import Section from "./components/UI/section";
import Skills from "./components/UI/skills";
import ProjectsList from "./components/UI/projects";
import Footer from './components/UI/footer';
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Section />
    <ProjectsList />
    <Skills />
    <Footer />
  </React.StrictMode>
);
