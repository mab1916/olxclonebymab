import './style.css'
import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    float: 'right'
  },
  expandOpen: {
    color: 'red'
  },
}));


export default function Products() {
  const classes = useStyles();
  const products = useSelector(state => state.ProductReducer.products);
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      {products.map((product) => {
        return (
          <div>
            <Card className='cardposition'>
              <CardMedia className={classes.media} image={product.img} title={product.name}>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="add to favorites"
                >
                  <FavoriteIcon />
                </IconButton>
              </CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Rs {product.price}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.name}
                </Typography>
              </CardContent>
            </Card>
          </div>
        )
      })}
    </div>
  );
}
