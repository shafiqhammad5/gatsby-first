import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import * as heroStyles from './hero.module.css'
import Container from './container';

const Hero = (props) => {
  const {mainHeading, paragraph, imgSrc} = props;
  return (
    <>
      <div className={heroStyles.container}>
        <Container>
          <div className={heroStyles.content}>
            <h1>{mainHeading}</h1>
            <p>{paragraph}</p>
          </div>
          <StaticImage 
            src='../images/hero-image.svg'
            className={heroStyles.heroImage}
          />
        </Container>
      </div>
    </>
  );
};

export default Hero;