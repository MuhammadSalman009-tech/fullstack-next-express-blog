import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backGround: "#25005f",
  },
  cardContent: {
    flexGrow: "1",
  },
  productTitle: {
    color: "#3f51b5",
    textDecoration: "none",
    "&:hover": {
      color: "#ff8000",
    },
  },
}));
export default useStyles;
