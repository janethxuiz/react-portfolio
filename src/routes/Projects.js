import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import ProjectPage from '../components/ProjectPage';
import Work from '../components/Work';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <ProjectPage />
      <Work />
      <Footer />
    </div>
  );
}

export default Projects;