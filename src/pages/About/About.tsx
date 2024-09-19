import React from "react";
import { Chip, IconButton } from "@mui/material";
import { LinkedIn, GitHub, Email, Call } from "@mui/icons-material";
import styles from "./About.module.css";
import gauravAboutPhoto from "../../assets/gaurav_about.jpeg";
import ReactTypingEffect from "react-typing-effect";
import skillGroups from "./skills.json";

const About: React.FC = () => {
  return (
    <section className={styles.about_section}>
      <div className={styles.about_container}>
        <div className={styles.about_grid}>
          {/* Image Section with Titles */}
          <div className={styles.about_image_wrapper}>
            <div className={styles.titles_container}>
              <h2
                className={styles.constant_text}
                style={{
                  paddingRight: "20px",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                Technical Lead
              </h2>
            </div>

            <img
              src={gauravAboutPhoto}
              alt="Gaurav Thorat"
              className={styles.about_image}
            />

            <div className={styles.titles_container}>
              <h3
                className={styles.constant_text}
                style={{
                  paddingRight: "20px",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                Scrum Master
              </h3>
            </div>
            <div className={styles.typing_effect}>
              <span className={styles.constant_text}> </span>
              <ReactTypingEffect
                text={["Frontend Developer", "FullStack Developer"]}
                speed={100}
                eraseSpeed={50}
                eraseDelay={2000}
                typingDelay={1000}
              />
            </div>
          </div>

          {/* Info Section */}
          <div className={styles.about_content}>
            <h1 className={styles.big_title}>About Me</h1>
            <p className={styles.about_description}>
              I am a highly skilled Technical Lead with over 13 years of
              expertise in software development, specializing in advanced
              frontend technologies with ReactJS. I have a proven track record
              of leading teams, managing complex projects, and delivering
              solutions on time and within budget. My expertise encompasses
              Agile methodologies, backend API integration, and implementing
              robust quality assurance processes. With a strong focus on
              translating UI designs into high-performance web applications, I
              am committed to optimizing both usability and speed. As an
              effective communicator, I excel in enhancing code quality through
              thorough peer reviews and meticulous documentation.
            </p>
            <div className={styles.personal_info}>
              <p>
                <strong>Name:</strong> Gaurav Thorat
              </p>
              <p>
                <strong>Role:</strong> Frontend Developer | Project Lead | Scrum
                Master | Project Manager | Solution Architect
              </p>
              <p>
                <strong>Experience:</strong> 14 Years 1 Month
              </p>
              <p>
                <strong>Address:</strong> Hamburg, Germany
              </p>
            </div>

            <h2 className={styles.skills_title}>Skills</h2>
            <div className={styles.skills}>
              {Object.entries(skillGroups).map(([category, skills]) => (
                <div className={styles.skills_group} key={category}>
                  <h3>{category}</h3>
                  <div className={styles.chip_container}>
                    {skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        className={styles.skill_chip}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.extra_info}>
              <h2>Certifications</h2>
              <p>
                <strong>Microsoft : 70-486 </strong> (Developing ASP.NET MVC Web
                Applications MCPD Certification)
              </p>
              <p>
                <strong>Microsoft : 70-564 </strong> (Designing and Developing
                Applications)
              </p>
              <p>
                <strong>Microsoft : 70-562 </strong> (Microsoft Certified
                Technology Specialist: ASP.NET Application Development)
              </p>
              <p>
                <strong>Microsoft : 70-536 </strong> (Microsoft NET Framework,
                Application Development Foundation)
              </p>
            </div>

            <div className={styles.extra_info}>
              <h2>Activities</h2>
              <p>
                <strong>Paper Presentation: </strong> International Level Paper
                Presentation “ITECH-09 an International Conference”, Amrutvahini
                College of Engineering, Sangamner, India
              </p>
              <p>
                <strong>C Coding Competition: </strong> National Level Technical
                Event (C-Bugg) on “EquinoX 2009&quot;, K.K. Wagh Institute of
                Engineering Education &amp; Research, Nasik, India
              </p>
              <p>
                <strong>Electronics Circuit Design Competition: </strong>
                National Level Technical Event (Elec-Trojen) on “EquinoX
                2009&quot;, K.K. Wagh Institute of Engineering Education &amp;
                Research, Nasik, India
              </p>
              <p>
                <strong>C Coding Competition: </strong> State Level Technical
                Event (C-Coding Competition) on &quot; ITiazza 2009&quot;, K.K.
                Wagh Institute of Engineering Education &amp; Research, Nasik,
                India
              </p>
            </div>

            <div className={styles.extra_info}>
              <h2>Profile Information</h2>
              <p>
                <strong>Profile:</strong> Software Development
              </p>
              <p>
                <strong>Domain:</strong> Automobile, Oil & Gas, Energy,
                Logistics, Banking, Hotel, Healthcare and more.
              </p>
              <p>
                <strong>Education:</strong> Master of Technology in Computer
                Science
              </p>
              <p>
                <strong>Language:</strong> English, Hindi, Marathi, German (A1)
              </p>

              <p>
                <strong>Interest:</strong> Traveling, Cricket, Cooking
              </p>
              <p>
                <strong>Projects Completed:</strong> 35+
              </p>
              <div className={styles.social_links}>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/gauravthorath/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://github.com/gauravthorath"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  component="a"
                  href="mailto:gauravjobs25@gmail.com"
                  aria-label="Gmail"
                >
                  <Email />
                </IconButton>
                <IconButton
                  component="a"
                  href="tel:+49-15216127113"
                  target="_blank"
                  aria-label="Skype"
                >
                  <Call />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
