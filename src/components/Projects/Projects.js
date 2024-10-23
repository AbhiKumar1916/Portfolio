import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sorting from "../../Assets/Projects/sorting.jpg";
import Fitpulse from "../../Assets/Projects/Fitpulse.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fitpulse}
              isBlog={false}
              title="FitPulse"
              description="FitPulse is a fully functional workout tracker WebApp that enables users to create, update, store, and delete their daily workout details. First, the user is required to sign up to create an account on RepUp. Then, a form will appear in which the user can fill in all the necessary details, such as the name of the exercise, total reps, loads, etc."
              ghLink="https://github.com/AbhiKumar1916/FitPulse"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sorting}
              isBlog={false}
              title="Sorting Visalizer"
              description="Created a Sorting Visualizer to illustrate sorting algorithms and enhance understanding of Data Structures and Algorithms through dynamic visual representations.Implemented features for real-time algorithm execution and data manipulation, providing an educational tool for
better grasping sorting processes."
              ghLink="https://github.com/AbhiKumar1916/Sorting"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
