import React, { useState } from 'react';
import './AllProjects.css';
import FilterButton from './FilterButton';
import ProjectCard from './ProjectCard';

import searchIcon from './work/search.svg';
import projectImg1 from './work/project1.jpg';
import projectImg2 from './work/project2.jpg';
import projectImg3 from './work/project3.jpg';

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
    <div className="all-projects-container">
      <div className="header-section">
        <h1 className="main-title">All Pr<span className="stretch-glyph">o</span>jects</h1>
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
  );
};

export default AllProjects;