import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
    color: 'black'
  },
  pos: {
    marginBottom: 12,
    marginTop: 12
  },
  learn: {
    marginLeft: 'auto',
    marginRight:'auto'
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
          <Button size="small" color="primary" className={classes.learn}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(SimpleCard);
