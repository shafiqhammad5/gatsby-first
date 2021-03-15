import React from 'react';
import Container from './container';
import SectionTitle from './sectionTitle';
import * as aboutStyles from './about-section.module.css'
import { StaticImage } from 'gatsby-plugin-image';

const AboutSection = () => {
  return (
    <div className={aboutStyles.container}>
      <Container>
        <div className={aboutStyles.wrapper}>
          <div className={aboutStyles.titleBox}>
            <SectionTitle
              title="About Section Title Here"
              paragraph="Scing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam era. We elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam era."
            />
          </div>
          <div>
            <StaticImage 
              src="../images/about-image.svg"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;