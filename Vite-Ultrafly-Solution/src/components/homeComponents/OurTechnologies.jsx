import React from 'react';
import html from '../../images/technologies/html-5.png';
import css from '../../images/technologies/css-3.png';
import js from '../../images/technologies/js.png';
import react from '../../images/technologies/react.png';
import mongodb from '../../images/technologies/mongodb.png';
import adobe from '../../images/technologies/adobe.png';
import nodejs from '../../images/technologies/node.png';
import angularjs from '../../images/technologies/angularjs.png';
import dovinci from '../../images/technologies/dovinci.png';
import python from '../../images/technologies/python.png';
import java from '../../images/technologies/java.png';
import firebase from '../../images/technologies/firebase.png';
import aws from '../../images/technologies/aws.png';

function OurTechnologies() {
  const technologies = [
    { src: html, alt: 'HTML', delay: 50 },
    { src: css, alt: 'CSS', delay: 100 },
    { src: js, alt: 'JavaScript', delay: 150 },
    { src: react, alt: 'React', delay: 200 },
    { src: mongodb, alt: 'MongoDB', delay: 250 },
    { src: adobe, alt: 'Adobe', delay: 300 },
    { src: nodejs, alt: 'Node.js', delay: 350 },
    { src: angularjs, alt: 'AngularJS', delay: 400 },
    { src: dovinci, alt: 'DaVinci', delay: 450 },
    { src: python, alt: 'Python', delay: 500 },
    { src: java, alt: 'Java', delay: 550 },
    { src: firebase, alt: 'Firebase', delay: 600 },
    { src: aws, alt: 'AWS', delay: 650 },
  ];

  return (
    <>
      <div className="mt-10">
        <h1 className="text-center font-bold text-xl sm:text-2xl md:text-4xl text-gray-800 mb-8">Our Technologies</h1>
      </div>
      <section className="flex flex-wrap gap-5 sm:gap-10 justify-center p-4 mb-20 mt-20">
        {technologies.map((tech, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay={tech.delay}
            className="w-24 h-16 sm:w-36 sm:h-32 p-4 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
            style={{ backgroundImage: 'linear-gradient(145deg, #f5f5f5, #ffffff)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}
          >
            <img src={tech.src} alt={tech.alt} className="h-full w-auto rounded-md" />
          </div>
        ))}
      </section>
    </>
  );
}

export default OurTechnologies;
