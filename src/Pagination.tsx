import { Button, ButtonGroup } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Pagination({ goToPreviousPage, goToNextPage }: any) {
  return (
    <ButtonGroup
      variant="contained"
      sx={{
        justifyContent: "center",
        display: "flex",
        padding: "2rem",
      }}
    >
      {goToPreviousPage && (
        <Button
          color="secondary"
          onClick={goToPreviousPage}
          sx={{ marginRight: "10rem" }}
        >
          <ArrowBackIcon />
          Previous
        </Button>
      )}
      {goToNextPage && (
        <Button color="primary" onClick={goToNextPage}>
          Next
          <ArrowForwardIcon />
        </Button>
      )}
    </ButtonGroup>
  );
}
