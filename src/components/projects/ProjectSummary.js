import React from "react";
import moment from "moment";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth project-summary">
      <div className="card-content grey-text text-darken-3">
        <div className="card-image">
          <img src={project.image} alt={project.title} />
        </div>
        <span className="card-title">{project.title}</span>

        <div className="card-action">
          <p>
            Oposted by the {project.authorFirstName} {project.authorLastName}
          </p>
          <p className="grey-text">
            {moment(project.createdAt.toDate()).calendar()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
