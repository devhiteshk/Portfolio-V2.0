import { Box } from "@mui/material";
import React from "react";

import styles from "./page.module.css";
import Hero from "./Hero";

export default function Home(): JSX.Element {
  return (
    <Box>
      <Box>
        <Hero />
      </Box>
    </Box>
  );
}
