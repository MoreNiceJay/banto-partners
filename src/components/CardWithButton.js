import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },

  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  button: {
    height: 48,
    width: "100%",
    padding: "0 30px"
  },
  buttonDiv: { width: "100%", display: "flex", justifyContent: "center" }
}))
const CardWithButton = ({ preExplain, explain, buttonText, buttonHref }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {preExplain}
        </Typography>
        <div className={classes.buttonDiv}></div>
        <br />

        <Typography variant="body2" component="p">
          {explain}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className={classes.button}
          size="large"
          variant="outlined"
          color="primary"
          onClick={() => {
            if (buttonHref === "#") {
              alert("오픈예정입니다. 불편을 드려 죄송합니다")
            } else {
              window.open(buttonHref, "_blank")
            }
          }}
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardWithButton
