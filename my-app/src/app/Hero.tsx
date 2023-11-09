"use client";

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
  const toggleActive = (e: any) => {
    const myTO = setTimeout(() => {
      toggleActive(e);
    }, 140);

    let element: any = document.getElementById(e.target.id);
    if (element.classList.contains("colorAnimation")) {
      element.classList.remove("colorAnimation");
      clearTimeout(myTO);
    } else {
      element?.classList.add("colorAnimation");
    }
  };

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
          zIndex: 9,
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
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <SwipeableTemporaryDrawer />
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 7 }}>
              <Typography
                sx={{ cursor: "pointer", ":hover": { color: "#000" } }}
                fontWeight={400}
                variant="body2"
                color="#6A98F0"
              >
                Home
              </Typography>
              <Typography
                sx={{ cursor: "pointer", ":hover": { color: "#000" } }}
                fontWeight={400}
                variant="body2"
                color="#6A98F0"
              >
                About Me
              </Typography>
              <Typography
                sx={{ cursor: "pointer", ":hover": { color: "#000" } }}
                fontWeight={400}
                variant="body2"
                color="#6A98F0"
              >
                Journey
              </Typography>
              <Typography
                sx={{ cursor: "pointer", ":hover": { color: "#000" } }}
                fontWeight={400}
                variant="body2"
                color="#6A98F0"
              >
                Projects
              </Typography>
              <Typography
                sx={{ cursor: "pointer", ":hover": { color: "#000" } }}
                fontWeight={400}
                variant="body2"
                color="#6A98F0"
              >
                Contact
              </Typography>
              <Typography
                sx={{ cursor: "pointer", ":hover": { color: "#000" } }}
                fontWeight={400}
                variant="body2"
                color="#6A98F0"
              >
                Blog
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
      <Box
        sx={{
          width: "40%",
          height: "100vh",
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: -1,
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${"https://raw.githubusercontent.com/devhiteshk/Portfolio-V2.0/d2ceaf54e4085330cdf9e549b60dd2769303b697/my-app/public/Static/herobg.svg"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
          }}
        ></Box>
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
            flexDirection: { xs: "column", md: "row" },
            height: "100%",
            width: "100%",
            maxWidth: "lg",
            display: "flex",
            justifyContent: { xs: "space-evenly", md: "space-between" },
            alignItems: "center",
            px: 3,
          }}
          pb={"50px"}
          pt={"50px"}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              //   width: { xs: "100%", md: "60%" },
            }}
          >
            <Typography
              pl={0.4}
              fontFamily={"Montserrat, sans-serif"}
              variant="body1"
              fontWeight={300}
              color="rgb(56, 56, 56)"
            >
              Hello, {"I'm"}
            </Typography>
            <Typography
              variant="h2"
              fontWeight={"bold"}
              fontFamily={"Montserrat, sans-serif"}
              color="#000"
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
              color="rgb(56, 56, 56)"
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
                  fontWeight: 400,
                  fontSize: 13,
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
          <Box py={2}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: { xs: "center", md: "flex-end" },
                position: "relative",
              }}
            >
              <Paper elevation={3} sx={{ px: 1, py: { xs: 2, md: 5 } }}>
                <Box
                  sx={{
                    minWidth: { xs: "100%", md: "100%" },
                    fontSize: { xs: "12px", md: "16px" },
                  }}
                >
                  <MyCoolCodeBlock />
                </Box>
              </Paper>
              <Box
                sx={{
                  position: { xs: "absolute", md: "absolute" },
                  left: { xs: -20, md: -60 },
                  bottom: { xs: -50, md: -40 },
                  //   maxWidth: "264px",
                }}
              >
                <Paper
                  sx={{
                    p: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                    gap: 1,
                    flexWrap: "wrap",
                  }}
                >
                  <Box
                    onClick={(e) => toggleActive(e)}
                    id="B1"
                    sx={{
                      width: 40,
                      height: 40,
                      background:
                        "linear-gradient(90deg, rgba(68,165,230,1) 0%, rgba(116,54,199,1) 100%)",
                      borderRadius: "10px",
                      cursor: "pointer",
                      m: "1.5px",
                      "&:hover": { width: 43, height: 43, m: "0px" },
                    }}
                  ></Box>
                  <Box
                    onClick={(e) => toggleActive(e)}
                    id="B2"
                    sx={{
                      width: 40,
                      height: 40,
                      background:
                        "linear-gradient(134deg, rgb(106, 152, 240) 0%, rgb(73, 97, 220) 99%)",
                      borderRadius: "10px",
                      cursor: "pointer",
                      m: "1.5px",
                      "&:hover": { width: 43, height: 43, m: "0px" },
                    }}
                  ></Box>
                  <Box
                    onClick={(e) => toggleActive(e)}
                    id="B3"
                    sx={{
                      width: 40,
                      height: 40,
                      background: "#6D83F2",
                      borderRadius: "10px",
                      cursor: "pointer",
                      m: "1.5px",
                      "&:hover": { width: 43, height: 43, m: "0px" },
                    }}
                  ></Box>
                  <Box
                    onClick={(e) => toggleActive(e)}
                    id="B4"
                    sx={{
                      width: 40,
                      height: 40,
                      background: "#000",
                      borderRadius: "10px",
                      cursor: "pointer",
                      m: "1.5px",
                      "&:hover": { width: 43, height: 43, m: "0px" },
                    }}
                  ></Box>
                  <Box
                    onClick={(e) => toggleActive(e)}
                    id="B5"
                    sx={{
                      width: 40,
                      height: 40,
                      background: "#6A98F0",
                      borderRadius: "10px",
                      cursor: "pointer",
                      m: "1.5px",
                      "&:hover": { width: 43, height: 43, m: "0px" },
                    }}
                  ></Box>
                </Paper>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;

import { CodeBlock, tomorrow } from "react-code-blocks";
import { Scale } from "@mui/icons-material";
import SwipeableTemporaryDrawer from "./components/Drawer";

const text = `class Person {
    constructor( ) {
        this.name = "Hitesh Kumar";
        this.triats = [ "Code", "Manage" ];
        this.age = newDate( ).getFullYear( ) - 1998;
    }
}`;

function MyCoolCodeBlock() {
  return (
    <CodeBlock
      text={text}
      language={"javascript"}
      showLineNumbers={false}
      wrapLongLines={true}
      theme={tomorrow}
    />
  );
}
