import type { MouseEvent } from "react";
import { Box } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { motion } from "framer-motion";

type RocketProps = {
  onClick: (e: MouseEvent<HTMLAnchorElement>) => void;
  nextSection: string;
};

export const RocketIcon = ({ onClick, nextSection }: RocketProps) => {
  return (
    <Box>
      <motion.a href={`#${nextSection}`} onClick={onClick}>
        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            rotate: "135deg",
          }}
        >
          <RocketLaunchIcon
            sx={{
              fontSize: 50,
              color: "primary.main",
              transition: "color 0.3s",
              "&:hover": { color: "#f78c0a", scale: "1.05" },
            }}
          />
        </motion.div>
      </motion.a>
    </Box>
  );
};
