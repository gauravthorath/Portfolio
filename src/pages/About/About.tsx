import React, { useEffect, useState } from "react";
import { Box, Chip, IconButton } from "@mui/material";
import { LinkedIn, GitHub, Email, Call } from "@mui/icons-material";
import styles from "./About.module.css";
import gauravAboutPhoto from "../../assets/gaurav_about.webp";
import ReactTypingEffect from "react-typing-effect";
import skillGroups from "./skills.json";
import { supabase } from "../../api/supabaseClient";
import { getIpAddress } from "../../api/utils";
import { useThemeContext } from "../../context/ThemeContext";

const About: React.FC = () => {
  const [ipAddress, setIpAddress] = useState<string>("");
  const { isDarkTheme } = useThemeContext();

  useEffect(() => {
    // Function to fetch IP address and track visit
    const fetchIpAddress = async () => {
      const ip = await getIpAddress();
      setIpAddress(ip);
    };

    fetchIpAddress();

    const trackVisit = async () => {
      if (!ipAddress) return;

      const today = new Date().toISOString().split("T")[0]; // Get today's date in 'YYYY-MM-DD' format

      // Check if a record already exists for this IP address and date
      const { data, error } = await supabase
        .from("visitors")
        .select("*")
        .eq("ip_address", ipAddress)
        .eq("visit_date", today);

      if (error) {
        console.error("Error fetching records:", error);
        return;
      }

      if (data && data.length === 0) {
        // No record exists for this IP and date, so we insert a new one
        const { error: insertError } = await supabase.from("visitors").insert([
          {
            ip_address: ipAddress,
            visit_date: today,
          },
        ]);

        if (insertError) console.error("Error inserting record:", insertError);
      }
    };

    trackVisit();
  }, [ipAddress]);

  return (
    <section
      className={`${styles.about_section} ${isDarkTheme ? styles.dark : styles.light}`}
    >
      <div className={`${styles.about_container}`}>
        <div className={`${styles.about_grid}`}>
          {/* Image with Title Section */}
          <Box className={styles.about_image_wrapper}>
            <Box className={styles.constant_text}>Frontend Developer</Box>
            <img
              src={gauravAboutPhoto}
              alt="Gaurav Thorat - Frontend Developer"
              className={styles.about_image}
              loading="lazy" // Lazy loading for performance
              width={200} // Set appropriate width
              height={200} // Set appropriate height
              style={{ objectFit: "cover" }} // Maintain aspect ratio
            />
            <Box className={styles.constant_text}>Technical Lead</Box>
            <div className={styles.typing_effect}>
              <ReactTypingEffect
                text={[
                  "Scrum Master",
                  "Technical Project Manager",
                  "Solution Architect",
                  "FullStack Developer",
                ]}
                speed={25} //typing speed
                eraseSpeed={40} // deleting speed
                eraseDelay={750} //this is wait before deleting starts
                typingDelay={500} //this is wait before typing starts
              />
            </div>
          </Box>

          {/* Info Section */}
          <div className={`${styles.about_content}`}>
            <h1 className={`${styles.big_title}`}>About Me</h1>
            <p className={`${styles.about_description}`}>
              Lead Frontend Developer with 14+ years of experience in software
              development, specialising in frontend development with ReactJS.
              Proven ability to lead teams, manage projects, and ensure timely,
              within-budget delivery. Expert in Agile methodologies, backend API
              integration, SaaS development, CI/CD pipelines, AWS hosting,
              project roadmap planning, risk analysis, and implementing quality
              assurance measures. Skilled in transforming UI designs into
              high-quality web applications and optimising performance. Strong
              communicator with a track record of enhancing quality through peer
              reviews, managing user stories, and thorough documentation.
            </p>
            <div className={`${styles.personal_info}`}>
              <p>
                <strong>Name:</strong> Gaurav Thorat
              </p>
              <p>
                <strong>Roles:</strong> Frontend Developer | Full Stack
                Developer | Technical Lead | Scrum Master | Project Manager |
                Solution Architect
              </p>
              <p>
                <strong>Experience:</strong> 14+ Years
              </p>
              <p>
                <strong>Address:</strong> Hamburg, Germany
              </p>
              <p>
                <strong>Contact:</strong> +49-15216127113
              </p>
              <p>
                <strong>Email:</strong> gauravjobs25@gmail.com
              </p>
            </div>

            <h2 className={`${styles.skills_title}`}>Skills</h2>
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
              <h2>Experience</h2>
              <p>
                <strong>
                  Technical Lead Frontend Development, ENCO SOFTWARE GMBH - May
                  2023 - Present
                </strong>
              </p>
              <ul>
                <li>
                  Led development of ReactJS applications with Theia, Material
                  UI, AGGrid, and Testing.
                </li>
                <li>
                  Managed project roadmaps, tracked user stories, and mitigated
                  risks via risk analysis.
                </li>
                <li>
                  Automated deployments with CI/CD pipelines using GitLab,
                  deployed on IONOS via Portainer.
                </li>
              </ul>

              <p>
                <strong>
                  Senior Frontend Developer, JUSTTRACK (APPLIKE GROUP) - Nov
                  2022 - Apr 2023
                </strong>
              </p>
              <ul>
                <li>
                  Implemented features with ReactJS, React Table, Tanstack
                  Query, Redux, Material UI, Rechart.
                </li>
                <li>
                  Enhanced product reliability through E2E testing and ensured
                  stable deployments.
                </li>
              </ul>

              <p>
                <strong>Other Projects</strong>
              </p>
              <ul>
                <li>
                  Projects Completed across various domains: Automobile, Energy,
                  Logistics, Banking, etc. (See <b>Projects</b> tab)
                </li>
              </ul>
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

            <div className={styles.social_links}>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/gauravthorath/"
                target="_blank"
                aria-label="LinkedIn"
                color="primary"
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                component="a"
                href="https://github.com/gauravthorath"
                target="_blank"
                aria-label="GitHub"
                color="primary"
              >
                <GitHub />
              </IconButton>
              <IconButton
                component="a"
                href="mailto:gauravjobs25@gmail.com"
                aria-label="Gmail"
                color="primary"
              >
                <Email />
              </IconButton>
              <IconButton
                component="a"
                href="tel:+49-15216127113"
                target="_blank"
                aria-label="Call"
                color="primary"
              >
                <Call />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
