import { makeStyles, Theme } from "@material-ui/core/styles";

export const characterUseStyles = makeStyles((theme: Theme) => ({
  table: {
    maxWidth: 700,
  },
  return: {
    marginBottom: 24,
    display: "flex",
  },
  input: {
    marginBottom: 24,
    display: "flex",
    maxWidth: 280,
  },
  title: {
    position: "sticky",
    top: 0,
    backgroundColor: "white",
    zIndex: 100,
    paddingBottom: 12,
  },
  paper: {
    position: "absolute",
    width: "auto",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalStyle: {
    display: "flex",
    alignItems: "center",
    "& > div": {
      padding: "2rem",
      marging: "2rem",
    },
  },
  characterDetail: {
    display: "flex",
    flexDirection: "column",
    alignItems: "top",
    width: "auto",
    flexWrap: "nowrap",
    padding: "0 16px",
    "& > span": {
      padding: "1px 0",
    },
  },
  container: {
    display: "flex",
  },
}));
