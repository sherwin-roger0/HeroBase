import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { PinDropSharp } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {Link} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    paddingTop: '100%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  }
}));

export default function HeroCard() {
  var retrievedObject = localStorage.getItem('hero');
  const hero = JSON.parse(retrievedObject);
  const name = hero.name
  const word = name.charAt(0);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container fixed>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Grid direction="column" justify="center" alignItems="center" container spacing={1}>
      <Grid item xs>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {word}
              </Avatar>
            }
            title={hero.name}
          />
          <CardMedia
            className={classes.media}
            image={hero.image}
            title={hero.name}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" >
              {hero.fullName}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Intelligence</Typography>
              <Typography paragraph>
                {hero.intelligence}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography paragraph>Power</Typography>
              <Typography paragraph>
                {hero.power}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography paragraph>Place of Birth</Typography>
              <Typography paragraph>
                {hero.placeOfBirth}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography paragraph>First Appearance</Typography>
              <Typography paragraph>
                {hero.firstAppearance}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography paragraph>Publisher</Typography>
              <Typography paragraph>
                {hero.publisher}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography paragraph>Gender</Typography>
              <Typography paragraph>
                {hero.gender}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography paragraph>Race</Typography>
              <Typography paragraph>
                {hero.race}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography paragraph>Work</Typography>
              <Typography paragraph>
                {hero.work}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography paragraph>Relatives</Typography>
              <Typography paragraph>
                {hero.relatives}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <br/>
        <br/>
        <br/>
        <Link to='/' className={classes.link} >
          <IconButton aria-label="Back">
            <ArrowBackIcon />
          </IconButton>
        </Link>
      </Grid>
    </Grid>
    </Container>
  );
}
