import React from "react";
import PropTypes from "prop-types";
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
    marginRight: "auto"
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
            text1={`
            • Designed, developed and hosted company website as well as managed all leads generated
            from the website

            • Preparing information, quoting insurance premiums and sending quotes to licensed WeCan
            Staff

            • Responsible for incoming mail, maintained accurate document records
            `}
          />
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(SimpleCard);
