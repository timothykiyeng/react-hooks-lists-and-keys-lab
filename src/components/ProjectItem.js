import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(technologies);

  // const technologyArray = technologies.map((technology) =>
  //    <span>{technology}</span>

  // )

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>

      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}

        <span>{technologies}</span>
      </div>
    </div>
  );
}

export default ProjectItem;
