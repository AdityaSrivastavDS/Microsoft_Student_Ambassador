/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Profile.jpeg";

const imageAltText = "Profile pic";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Titanic Classification Model",
    description:
      "The Titanic Classification project uses machine learning's Logistic regression algorithm to predict a person's likelihood of survival in the event of a sinking. Factors like socio-economic status, age, and gender are analyzed to determine their impact on survival chances. This project sheds light on historical patterns and biases in evacuation procedures.",
    url: "https://github.com/AdityaSrivastavDS/Bharat_Intern/blob/main/Titanic%20Classification.ipynb",
  },
  {
    title: "Library Management System",
    description:
      "Manual Library Management System, built with Python, offers a traditional yet efficient approach to library operations. This system provides librarians with the tools they need to effectively manage their collections and assist patrons in a hands-on manner.",
    url: "https://github.com/AdityaSrivastavDS/PYTHON-PROJECTS/blob/main/Library%20Management%20System.py.",
  },
  {
    title: "Carbon Emission Calculator",
    description:
      "he Carbon Emission Calculator is a user-friendly web application built using HTML and CSS. It enables individuals and businesses to estimate their carbon footprint based on inputted data such as energy consumption, transportation habits, and lifestyle choices. The calculator provides valuable insights into environmental impact, helping users make informed decisions towards reducing their carbon emissions and promoting sustainability.",
    url: "https://github.com/AdityaSrivastavDS/HTML-PROJECTS/blob/main/Carbon%20Emission.html",
  },
  {
    title: "Face Recogonizer",
    description:
      "The Python-based Face Recognizer program employs advanced computer vision techniques to accurately identify and authenticate individuals based on their facial features. ",
    url: "https://github.com/AdityaSrivastavDS/PYTHON-PROJECTS/blob/main/Face%20Recognizer.py",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
