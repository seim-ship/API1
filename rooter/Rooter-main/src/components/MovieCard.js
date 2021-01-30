import React from 'react';
import Trailer from './Trailer';


import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import PropTypes from "prop-types";

import ReactStars from "react-rating-stars-component";
import App from '../App';
const MovieCard = ({ movie }) => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    const { title, description, posteUrl, rate } = movie
    return (
        
        <div id="two">
            <Card>
                <CardImg top width="250px" height="250px" src={posteUrl} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>{description}</CardText>
                    <ReactStars
                        count={rate}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
          
          
          <Link to={`/trailer`}>Click here to watch</Link>
              
                </CardBody>
                
               
                
            </Card>
        </div>
        
    );
};

MovieCard.protypes = {
    movie: PropTypes.object
}

export default MovieCard;