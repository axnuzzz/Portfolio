import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import edufied from '../../Assets/edufied.png'

const Experience = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple"> Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few companies I've worked at recently
        </p>
        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{
              background: "#1d1836",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px dotted  #232631" }}
            date="Feb 2023 - June 2023"
            iconStyle={{ background: "#c770f0" }}
            icon={
              <div className="flex justify-start items-center edufied">
                <img
                  src={edufied}
                  alt="Edufied"
                  className="object-contain edufied-image"
                  height={60}
                  width={65}
                />
              </div>
            }
          >
            <div class="experience-section">
            <div>
              <p class="experience-company">Edufied</p>
              <h3 class="experience-title">Developer Intern</h3>
            </div>

            <ul class="experience-description">
              <li>Developing and maintaining web applications using React.js and other related technologies.</li>
              <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.</li>
              <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
              <li>Participating in code reviews and providing constructive feedback to other developers.</li>
            </ul>
          </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </Container>
  )
}

export default Experience