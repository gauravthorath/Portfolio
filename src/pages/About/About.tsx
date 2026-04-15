import type React from "react";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import gauravAboutPhoto from "../../assets/gaurav_about.webp";
import ReactTypingEffect from "react-typing-effect";
import skillGroups from "./skills.json";
import { supabase } from "../../api/supabaseClient";
import { getIpAddress } from "../../api/utils";
import { useThemeContext } from "../../context/ThemeContext";

const About: React.FC = () => {
  const [ipAddress, setIpAddress] = useState<string>("");
  const [showAllSkills, setShowAllSkills] = useState(false);
  const { isDarkTheme } = useThemeContext();

  useEffect(() => {
    const fetchIpAddress = async () => {
      const ip = await getIpAddress();
      setIpAddress(ip);
    };

    fetchIpAddress();

    const trackVisit = async () => {
      if (!ipAddress) return;

      const today = new Date().toISOString().split("T")[0];

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

  const visibleSkillsCount = showAllSkills ? Number.POSITIVE_INFINITY : 8;

  return (
    <Container maxWidth="xl" sx={{ pt: { xs: 4, md: 6 } }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "360px 1fr" },
          gap: 3,
        }}
      >
        <Card
          sx={{
            background: isDarkTheme
              ? "linear-gradient(180deg, #111a2d 0%, #0b1220 100%)"
              : "linear-gradient(180deg, #ffffff 0%, #eef2ff 100%)",
            border: "1px solid",
            borderColor: isDarkTheme ? "rgba(148,163,184,.2)" : "rgba(99,102,241,.2)",
          }}
        >
          <CardContent>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 260,
                mx: "auto",
                borderRadius: "999px",
                p: 0.8,
                background: isDarkTheme
                  ? "linear-gradient(135deg, rgba(139,157,255,.55), rgba(34,211,238,.35))"
                  : "linear-gradient(135deg, rgba(91,91,247,.35), rgba(14,165,233,.25))",
                boxShadow: isDarkTheme
                  ? "0 20px 50px rgba(2, 6, 23, 0.55)"
                  : "0 18px 40px rgba(59, 130, 246, 0.22)",
              }}
            >
              <Box
                component="img"
                src={gauravAboutPhoto}
                alt="Gaurav Thorat"
                sx={{
                  width: "100%",
                  display: "block",
                  borderRadius: "999px",
                  objectFit: "cover",
                  aspectRatio: "1 / 1",
                }}
              />
            </Box>
            <Stack spacing={1} sx={{ mt: 2 }}>
              <Chip label="Frontend Developer" color="primary" variant="outlined" />
              <Chip label="Technical Lead" color="secondary" variant="outlined" />
              <Typography variant="h6" sx={{ mt: 1, minHeight: 36 }}>
                <ReactTypingEffect
                  text={[
                    "Scrum Master",
                    "Technical Project Manager",
                    "Solution Architect",
                    "Full Stack Developer",
                  ]}
                  speed={30}
                  eraseSpeed={40}
                  eraseDelay={900}
                  typingDelay={400}
                />
              </Typography>
            </Stack>
            <Stack spacing={1.5} sx={{ mt: 3 }}>
              <Typography variant="body2"><strong>Location:</strong> Hamburg, Germany</Typography>
              <Typography variant="body2"><strong>Experience:</strong> 14+ years</Typography>
              <Typography variant="body2"><strong>Email:</strong> gauravjobs25@gmail.com</Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ mt: 3, justifyContent: "flex-start", flexWrap: "wrap" }}>
              <Button
                variant="outlined"
                component="a"
                href="https://www.linkedin.com/in/gauravthorath/"
                target="_blank"
                rel="noreferrer"
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: 999,
                  px: 1.6,
                  borderColor: isDarkTheme ? "rgba(148,163,184,.45)" : "rgba(99,102,241,.35)",
                  backgroundColor: isDarkTheme ? "rgba(15,23,42,.3)" : "rgba(255,255,255,.55)",
                }}
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                component="a"
                href="https://github.com/gauravthorath"
                target="_blank"
                rel="noreferrer"
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: 999,
                  px: 1.6,
                  borderColor: isDarkTheme ? "rgba(148,163,184,.45)" : "rgba(99,102,241,.35)",
                  backgroundColor: isDarkTheme ? "rgba(15,23,42,.3)" : "rgba(255,255,255,.55)",
                }}
              >
                GitHub
              </Button>
            </Stack>
          </CardContent>
        </Card>

        <Stack spacing={3}>
          <Card sx={{ backgroundColor: "background.paper" }}>
            <CardContent>
              <Typography variant="h3" sx={{ mb: 1.5 }}>
                Building polished products that scale
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Frontend-focused full stack engineer delivering fast, accessible, and maintainable web
                products. I lead projects from architecture to release, balancing product speed with code quality.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ backgroundColor: "background.paper" }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 1,
                  mb: 2,
                  flexWrap: "wrap",
                }}
              >
                <Typography variant="h5">
                Skills
                </Typography>
                <Button
                  size="small"
                  variant="text"
                  onClick={() => setShowAllSkills((prev) => !prev)}
                >
                  {showAllSkills ? "Show less" : "Show all"}
                </Button>
              </Box>
              <Stack spacing={2}>
                {Object.entries(skillGroups).map(([category, skills]) => (
                  <Box key={category}>
                    <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
                      {category}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {skills.slice(0, visibleSkillsCount).map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          variant="outlined"
                          sx={{
                            bgcolor: isDarkTheme ? "rgba(15, 23, 42, 0.28)" : "rgba(255, 255, 255, 0.45)",
                            borderColor: isDarkTheme ? "rgba(148,163,184,.35)" : "rgba(99,102,241,.25)",
                            backdropFilter: "blur(3px)",
                          }}
                        />
                      ))}
                      {!showAllSkills && skills.length > visibleSkillsCount && (
                        <Chip
                          label={`+${skills.length - visibleSkillsCount} more`}
                          variant="outlined"
                          color="primary"
                        />
                      )}
                    </Box>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>

          <Card sx={{ backgroundColor: "background.paper" }}>
            <CardContent>
              <Typography variant="h5" sx={{ mb: 1.5 }}>
                Recent Experience
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Papayo AI</strong> — Senior Frontend Developer (Nov 2024 - Present): building
                data-driven experiences with React, TypeScript, GraphQL, and Playwright-based quality gates.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                <strong>ENCO SOFTWARE</strong> — Technical Lead Frontend (May 2023 - Sep 2024):
                leading React application development, architecture reviews, and CI/CD delivery.
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </Container>
  );
};

export default About;
