import { ChangeEvent, useState } from "react";
import { Paper, Pagination, Stack } from "@mui/material";

type MenuNavigationProps = {
  goToPage: (pageNumber: number) => void;
};

export const MenuNavigation = ({ goToPage }: MenuNavigationProps) => {
  const maxPages = 57;
  const [currentPage, setCurrentPage] = useState<number>(0);

  const onChangePage = (event: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    goToPage(page);
  };

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
      <Stack
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <Pagination count={maxPages} variant="outlined" color="primary" page={currentPage} onChange={onChangePage} />
      </Stack>
    </Paper>
  );
};
