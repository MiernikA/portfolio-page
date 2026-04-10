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
    <Box
      component="section"
      id={id}
      sx={{
        color: "#fff",
        scrollMarginTop: { xs: "72px", sm: 0 },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          minHeight: { xs: "auto", md: "100vh" },
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "flex-start", md: "center" },
          gap: { xs: 3, md: 2 },
          py: { xs: 4, md: 6, xl: 0 },
          pt: { xs: 10, md: 12, xl: 0 },
        }}
      >
        <SectionTitle subtitle={subtitle} title={title} />
        {children}
      </Container>
    </Box>
  );
};
