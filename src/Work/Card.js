import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import DialogPop from "./Dialog";

const styles = {
  card: {
    width: 400,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 40
  },
  title: {
    fontSize: 14,
    fontWeight: 700,
    color: "black"
  },
  pos: {
    marginBottom: 12,
    marginTop: 12
  },
  learn: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "inline"
  }
};

class SimpleCard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {this.props.company}
          </Typography>
          <Typography variant="h5" component="h2">
            {this.props.position}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {this.props.date}
          </Typography>
          <Typography component="p">{this.props.about}</Typography>
        </CardContent>
        <CardActions>
          <DialogPop
            className={classes.learn}
            title={this.props.company}
            text1={this.props.text1}
            text2={this.props.text2}
            text3={this.props.text3}
          />
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(SimpleCard);
