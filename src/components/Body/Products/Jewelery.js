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


export default function Jewelerys() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [Jewelerys] = FetchJewelerys();
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div>
            {Jewelerys.map((jewelery) => {
                return (
                    <div>
                        <Card className='cardposition'>
                            <CardMedia className={classes.media} image={jewelery.image} title={jewelery.title}>
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
                                    Rs {parseInt(jewelery.price*150)}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {jewelery.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                )
            })}
        </div>
    );
}

function FetchJewelerys() {
    const [Jewelerys, setJewelerys] = useState([]); 
    const [loading, setLoading] = useState(false);
  async function fetchjewelery() {
      try{
        setLoading(true)
        let Jewelerys = await axios.get('https://fakestoreapi.com/products/category/jewelery')
        console.log("Jewelerys",Jewelerys.data);
        setJewelerys(Jewelerys.data)
      }
      catch(err){
        console.log("error", err)
      }
      finally{
        setLoading(false)
      }
  }
  useEffect(() => {
      fetchjewelery()
  }, [])
    return [Jewelerys,loading]
  }

// export default function Jewelerys() {
//     const [Jewelerys, loading] = FetchJewelerys();
//     if (loading) {
//         return <div>Loading...</div>
//     }
//     return (
//         <div>
//         {Jewelerys.map((jewelery, index) => {
//             return (
//                 <div>
//                     <img style={{width: 50}} src={jewelery.image} alt={jewelery.category} />
//                     <p>No. {index}</p>
//                     <p>Category: {jewelery.category}</p>
//                     <p>Description: {jewelery.description}</p>
//                     <p>ID: {jewelery.id}</p>
//                     <p>Price: {jewelery.price}</p>
//                     <p>Title: {jewelery.title}</p>
//                     <hr />
//                 </div>
//             )
//         })}
//     </div>
//     );
// }