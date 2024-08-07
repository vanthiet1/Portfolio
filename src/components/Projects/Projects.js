import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import BookStore from '../../Assets/Projects/book-store.png'
import TrailerMovie from '../../Assets/Projects/trailer-movie.png'
import ConnectChat from '../../Assets/Projects/Connect-chat.png'
import Quanli from '../../Assets/Projects/quanli.png'



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
              imgPath={BookStore}
              isBlog={false}
              title="Book-Store"
              description="💞️ Tech ReactJs - NodeJs - TailwindCss - MongoDB ( Mern Stack )"
              ghLink="https://github.com/vanthiet1/Book-Store"
              demoLink="https://book-store-mu-six.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TrailerMovie}
              isBlog={false}
              title="Trailer Movie"
              description="💞️ The Movie - TailwindCss - ReactJs - TMDB API"
              ghLink="https://github.com/vanthiet1/The-Movie"
              demoLink="https://the-movie-mu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ConnectChat}
              isBlog={false}
              title="Connect Chat"
              description="💞️ Tech React - NodeJs - Tailwind Socket.io - MongoDB ( Mern Stack )"
              ghLink="https://github.com/vanthiet1/Socical-Chat"
             demoLink="https://socical-chat.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Quanli}
              isBlog={false}
              title="Expense-Management"
              description="💞️ Tech React - NodeJs - TailwindCss - MongoDB ( Mean Stack )"
              ghLink="https://github.com/vanthiet1/Expense-Management"
              demoLink="https://expense-management-flame.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
