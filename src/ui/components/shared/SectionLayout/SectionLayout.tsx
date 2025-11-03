import { Box, Container } from "@mui/material";
import { SectionTitle } from "./SectionTitle";
import type {ReactNode} from "react";

type SectionLayoutProps = {
  id: string;
  title: string;
  subtitle: string;
  children: ReactNode;
};

export const SectionLayout = ({
  id,
  title,
  subtitle,
  children,
}: SectionLayoutProps) => {
  return (
    <Box component="section" id={id} sx={{ color: "#fff" }}>
      <Container
        maxWidth="xl"
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <SectionTitle subtitle={subtitle} title={title} />
        {children}
      </Container>
    </Box>
  );
};
