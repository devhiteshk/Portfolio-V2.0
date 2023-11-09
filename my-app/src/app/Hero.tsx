import { Box, Button, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "./../../public/Connect.svg";
import bg from "./../../public/static/herobg.svg";
import ArticleIcon from "@mui/icons-material/Article";

const flex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function Hero(): JSX.Element {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        height: "100%",
      }}
      className="Hero-Section"
    >
      <Paper
        elevation={1}
        sx={{
          position: "fixed",
          borderRadius: 0,
          top: 0,
          width: "100%",
          height: "50px",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ maxWidth: "lg", width: "100%", px: 3 }} style={flex}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Image
                alt="portfolio logo"
                draggable={false}
                src={logo}
                width={40}
              ></Image>
            </Box>
            <Box sx={{ display: "flex", gap: 7 }}>
              <Typography
                sx={{ cursor: "pointer", ":hover": { color: "#000" } }}
                fontWeight={400}
                variant="caption"
                color="#6A98F0"
              >
                Home
              </Typography>
              <Typography
                sx={{ cursor: "pointer", ":hover": { color: "#000" } }}
                fontWeight={400}
                variant="caption"
                color="#6A98F0"
              >
                About Me
              </Typography>
              <Typography
                sx={{ cursor: "pointer", ":hover": { color: "#000" } }}
                fontWeight={400}
                variant="caption"
                color="#6A98F0"
              >
                Journey
              </Typography>
              <Typography
                sx={{ cursor: "pointer", ":hover": { color: "#000" } }}
                fontWeight={400}
                variant="caption"
                color="#6A98F0"
              >
                Projects
              </Typography>
              <Typography
                sx={{ cursor: "pointer", ":hover": { color: "#000" } }}
                fontWeight={400}
                variant="caption"
                color="#6A98F0"
              >
                Contact
              </Typography>
              <Typography
                sx={{ cursor: "pointer", ":hover": { color: "#000" } }}
                fontWeight={400}
                variant="caption"
                color="#6A98F0"
              >
                Blog
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
      <Box>
        <img width={800} src={bg} alt="awesome bg image" />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
        }}
      >
        <Box
          sx={{
            minHeight: "100vh",
            height: "100%",
            width: "100%",
            maxWidth: "lg",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: 3,
          }}
          pb={"50px"}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
            }}
          >
            <Typography
              pl={0.4}
              fontFamily={"Montserrat, sans-serif"}
              variant="body1"
              fontWeight={300}
              color="initial"
            >
              Hello, {"I'm"}
            </Typography>
            <Typography
              variant="h2"
              fontWeight={"bold"}
              fontFamily={"Montserrat, sans-serif"}
              color="initial"
              //   sx={{
              //     backgroundcolor: "primary",
              //     backgroundImage: `linear-gradient(90deg, rgba(96,174,247,1) 0%, rgba(0,24,150,1) 100%)`,
              //     backgroundSize: "100%",
              //     backgroundRepeat: "repeat",
              //     backgroundClip: "text",
              //     WebkitBackgroundClip: "text",
              //     WebkitTextFillColor: "transparent",
              //   }}
            >
              Hitesh Kumar
            </Typography>
            <Typography
              pl={0.4}
              variant="body1"
              fontFamily={"Montserrat, sans-serif"}
              color="initial"
              fontSize={18}
              fontWeight={300}
            >
              Full Stack Developer & Automotive Engineer
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button
                startIcon={<ArticleIcon />}
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  textTransform: "capitalize",
                  fontWeight: 100,
                  fontSize: 12,
                  ml: 0.3,
                  backgroundcolor: "primary",
                  backgroundImage: `linear-gradient(134deg, rgb(106, 152, 240) 0%, rgb(73, 97, 220) 99%);`,
                  backgroundSize: "100%",
                  ":hover": {
                    backgroundImage:
                      "linear-gradient(90deg, rgba(68,165,230,1) 0%, rgba(116,54,199,1) 100%)",
                  },
                }}
                size="small"
                variant={"contained"}
              >
                Resume
              </Button>
            </Box>
          </Box>
          <Box sx={{ width: "40%" }}>Hello</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
