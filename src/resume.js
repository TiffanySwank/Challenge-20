import React from 'react';
import '../App.css';
import '../portfolio.css';

const Resume = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className="header">
                                <h3>Download ResumeHere: <a href="https://github.com/TiffanySwank2003/react-portfolio/raw/master/src/assets/Tiffany-resume.pdf">Tiffany</a>
                                </h3>
                            </div>

                            <div className="modal-footer"/>

                            <div className="header">
                                <h3>Skills</h3>
                            </div>
                            <div className="modal-footer"/>

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Full-stack</div>
                                </div>
                            </div>


                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Technologies</div>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>handlebars</p>
                                    </div>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>mongo</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="modal-footer" />

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Project Management</div>
                                </div>
                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>PMP Certificate</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Teaching </div>
                                </div>
                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>TESL Certificate</p>
                                    </div>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
};

export default Resume;
