import React, { useState } from 'react';
import './AllProjects.css';
import FilterButton from '../Common-All-Projects/FilterButton';
import ProjectCard from '../Common-All-Projects/ProjectCard';

import searchIcon from '../Assets/Searchicon.png';
import projectImg1 from '../Assets/Graphic Design IMG 1.png';
import projectImg2 from '../Assets/Graphic Design IMG 2.png';
import projectImg3 from '../Assets/Graphic Design IMG 4.png';

import NAV from '../Components/Nav'
import Footer from '../Components/Footer'


const AllProjects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    'All', 'UX/UI', 'Branding', 'Motion', '3D', 
    'Frontend', 'Video', 'Graphic Design', 'XR Design'
  ];

  const projects = [
    { id: 1, category: 'UX/UI', title: 'Architectural Vision', img: projectImg1 },
    { id: 2, category: 'UX/UI', title: 'Architectural Vision', img: projectImg2 },
    { id: 3, category: 'UX/UI', title: 'Architectural Vision', img: projectImg3 },
    { id: 4, category: 'UX/UI', title: 'Architectural Vision', img: projectImg2 },
    { id: 5, category: 'UX/UI', title: 'Architectural Vision', img: projectImg1 },
    { id: 6, category: 'UX/UI', title: 'Architectural Vision', img: projectImg3 },
  ];

  return (
    <section className='All-Projects-Main'>
    <NAV />
    <div className="all-projects-container">
      <div className="header-section">
        <h1 className="main-title">ALL PROJECTS</h1>
        <p className="sub-title">
          A curated collection of work spanning digital experiences, brand identity, and creative
          explorations across multiple disciplines.
        </p>
      </div>

      <div className="search-wrapper">
        <div className="search-bar">
          <img src={searchIcon} alt="search" className="search-icon" />
          <input 
            type="text" 
            placeholder="Search projects..." 
            className="search-input" 
          />
        </div>
      </div>

      <div className="filters-wrapper">
        {filters.map((filter) => (
          <FilterButton 
            key={filter}
            label={filter}
            isActive={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          />
        ))}
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            image={project.img}
            category={project.category}
            title={project.title}
          />
        ))}
      </div>
    </div>
<Footer />

    </section>
  );
};

export default AllProjects;