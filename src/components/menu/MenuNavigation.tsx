import { Paper } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function MenuNavigation({ goToPage }: any) {
  const onChangePage = (event: any, page: number) => {
    goToPage(page);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <Stack
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <Pagination
          count={57}
          variant="outlined"
          color="primary"
          onChange={onChangePage}
        />
      </Stack>
    </Paper>
  );
}
