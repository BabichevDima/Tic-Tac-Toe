import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export function Title(props) {
  let progress = (100 / 9) * props.currentMove;
  return (
    <div className="title">
      <h1>Tic-Tac-Toe</h1>
      <Box sx={{ width: "100%" }}>
        <LinearProgressWithLabel value={progress} />
      </Box>
    </div>
  );
}
