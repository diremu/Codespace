import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "../helpers/animation";

const Education = () => {
  return (
    <motion.div
      className="container"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="row">
        <div className="col-12">
          <h2 className="font-weight-bold">Education</h2>
          <p className="lead">
            This is a great area for you to to continually add to and refine as you continue to learn and create.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h3 className="font-weight-bold">My Work Desk</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <img className="img-fluid" src="src/images/design-desk.jpeg" alt="Work desk" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h3 className="font-weight-bold">My Projects</h3>
          <p className="lead">Here are a few projects I've worked on recently:</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ul className="list-group">
            {projectList.map((project, index) => (
              <li className="list-group-item" key={index}>
                <Link to={project.url} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </Link>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;