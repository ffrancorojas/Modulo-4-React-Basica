import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const avatarUseStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      height: 100,
      width: 100,
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);
