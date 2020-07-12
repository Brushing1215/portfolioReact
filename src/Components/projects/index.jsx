import React from "react";

const Projects = (props) => {
  return (
    <div className="col-sm-3 my-2" >
      <div class="card" style={{ width: '100%' }}>
        <img src={props.project.image} class="card-img-top" alt={props.project.name} />
        <div class="card-body">
        <h5 class="card-title">{props.project.name}</h5>
        <div className="row">
            <div className="col-6"><a href={props.project.github} className='text-body'><i class="fa fa-github" aria-hidden="true" ></i> Repo</a></div>
            <div className="col-6"><a href={props.project.deployed} className='text-body'>Website</a></div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
