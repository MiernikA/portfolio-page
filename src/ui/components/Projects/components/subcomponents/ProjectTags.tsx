import { Stack, Chip } from "@mui/material";

type Tag = { name: string; color: string };

type Props = {
  tags?: Tag[];
};

export const ProjectTags = ({ tags = [] }: Props) => {
  return (
    <Stack
      direction="row"
      spacing={0}
      sx={{
        borderTop: "1px solid rgba(255,255,255,0.2)",
        pt: 2,
        flexWrap: "wrap",
        gap: 1,
        minWidth: 0,
        "& .MuiChip-root": {
          maxWidth: "100%",
        },
        "& .MuiChip-label": {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        },
      }}
    >
      {tags.map((tag) => (
        <Chip
          key={tag.name}
          label={`#${tag.name}`}
          sx={{
            background: "transparent",
            color: tag.color,
            border: `1px solid ${tag.color}`,
            fontWeight: 800,
            fontSize: "0.6rem",
            height: 25,
          }}
        />
      ))}
    </Stack>
  );
};
