import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function MenuNavigation({ goToPage }: any) {
  const onChangePage = (event: any, page: number) => {
    goToPage(page);
  };

  return (
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
  );
}
