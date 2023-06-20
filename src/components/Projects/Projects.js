import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import flowsneaks from '../../Assets/Projects/flowsneaks.png'
import NFTLaunch from '../../Assets/Projects/NFT.png'
import ethersneakers from '../../Assets/Projects/ethersneakers.png'
import whitelist from '../../Assets/Projects/whitelist.png'
import codex from '../../Assets/Projects/codex.png'

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
              imgPath={flowsneaks}
              isBlog={false}
              title="FlowSneaks"
              description="A Flow blockchain based Sneaker marketplace that lets you showcase your prized sneaker collection and buy newly released sneakers as well. Built using cadence and NextJS"
              ghLink="https://github.com/axnuzzz/FlowSneaks"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codex}
              isBlog={false}
              title="Code-X"
              description="Your own personal AI to help you write code bu using Natural Language Processing to turn your prompts into code. Built using the OpenAI API and VanillaJS"
              ghLink="https://github.com/axnuzzz/CodeX"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NFTLaunch}
              isBlog={false}
              title="CryptoDevs NFT"
              description="A website that lets you mint the CryptoDevs NFT by letting you connect your wallet. It checks if you're part of the whitelist and lets you access the NFTs a little earlier than the general public"
              ghLink="https://github.com/axnuzzz/CryptoDevs_NFT"
              demoLink="https://crypto-devs-nft-sepia.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ethersneakers}
              isBlog={false}
              title="EtherSneakers"
              description="A new-age sneaker marketplace that lets you showcase your sneaker collection and also allows you to buy and sell your favorite sneakers. Sneakers were sold before too, but never like this"
              ghLink="https://github.com/axnuzzz/EtherSneakers"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whitelist}
              isBlog={false}
              title="Whitelist Dapp"
              description="A website that lets you whitelist yourself for the all the upcoming drops for the whole CryptoDevs Universe. Built using Hardhat, Solidity and Create-Hardhat-App"
              ghLink="https://github.com/axnuzzz/WhitelistDapp"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
