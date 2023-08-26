import React from 'react';
import portfolio from '../data';
import '../App.css';
import '../portfolio.css';

const Portfolio = (props) => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className="header">
                                    <h3>Portfolio</h3>
                                </div>
                                <div className="modal-footer" />

                                <div className="grid-container vertical-line">
                                    {portfolio.map((project) => (
                                        <div class="project-card" id={project.id} key={project.id}>
                                            <h3 class="project-title">{project.name}</h3>
                                            <img src={project.image} alt={`image for ${project.name}`} />
                                            <h4><a href={project.deploy}>{project.name}</a></h4>
                                            <h4><a href={project.github}>{project.name} github</a></h4>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Portfolio;