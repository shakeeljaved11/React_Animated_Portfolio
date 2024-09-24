import React from 'react'
import project from './data/projects.json'
const Projects = () => {
  return (
    <>
      <div className='container projects my-3'>
        <h1>PROJECTS</h1>
        
        <div className='row'>
          {project.map((data) => {
            <>
            <div key={data.id}>
           
            </div>
          </>
          })}
        </div>
      </div>
    </>
  );
};

export default Projects