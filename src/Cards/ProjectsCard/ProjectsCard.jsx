import React from 'react';
import './projectscard.css'
import { LuLink } from "react-icons/lu";

const ProjectsCard = ({ linkname, image, title, description, tech, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      ><LuLink />
        {linkname}
      </a>
    </div>
  );
};

export default ProjectsCard;

