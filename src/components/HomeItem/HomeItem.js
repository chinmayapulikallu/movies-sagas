import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeItem.css';
import {withRouter} from 'react-router-dom';
//material-ui
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';


const useStyles = (theme) => ({
    root: {
        maxWidth: 345,
        borderColor: 'red',
        backgroundColor: '#80deea'
    },
    media: {
        // height: 0,
        // paddingTop: '56.25%', // 16:9
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
    
    
    
});


class HomeItem extends Component {

    //when a movie poster is clicked calls this function
    posterClick = (event, id) => {
        this.props.history.push({pathname: '/details/'+id, state: id})
    }

    render() {

        const { classes } = this.props;

        const genres = () => {return(
        
                    <ul>
                        {this.props.movie.genres_names.map((genre,index)=>
                       <li key={index}>
                           <Typography variant="body2" color="textSecondary" component="p">
                                {genre}
                                </Typography>
                        </li> 
                        )}
                        
                    </ul>
        )
        }
        return (
            <div className="movie-page">
            {/* material-ui cards */}
            <Card variant="outlined" className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                        </IconButton>
                    }
                        title={this.props.movie.title}
                        subheader={genres()}
                />
                <CardMedia
                    component="img"
                    className={classes.media}
                    image={this.props.movie.poster}
                    title={this.props.movie.title}
                        onClick={(event) => this.posterClick(event, this.props.movie.id)}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                       {this.props.movie.description}
                    </Typography>
                </CardContent>
                <CardActions> 
                </CardActions> 
            </Card>
            </div>
        )
    }

}   


const putReduxStateOnProps = (reduxState) => ({
    movies: reduxState.movies })

export default (withStyles(useStyles))(withRouter(connect(putReduxStateOnProps)(HomeItem)));