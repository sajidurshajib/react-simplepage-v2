import React from  'react';
import PROJECTS from '../data/projects';

const Project = (props)=>{
    const {title,image,description,link} = props.project;
    return(
        <div style={{display:'inline-block',}} className='col-md-4'>
            <h3>{title}</h3>
            <img src={image} alt='pro' style={{width:200, height:120}}/>
            <p>{description}</p>
            <a href={link}>{link}</a>
        </div>
    )
}


const Projects =()=>(
    <div className='container'>
        <h2>Highlited Projects</h2>
            <div style={{padding:50}} className='row'>
            {
                PROJECTS.map((PROJECT)=>(<Project key={PROJECT.id} project={PROJECT} />))
            }
            </div>
        </div>
    )
    

export default Projects;