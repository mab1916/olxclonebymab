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


export default function Electronics() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [Electronics] = FetchElectronics();
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div>
            {Electronics.map((electronic) => {
                return (
                    <div>
                        <Card className='cardposition'>
                            <CardMedia className={classes.media} image={electronic.image} title={electronic.title}>
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
                                    Rs {parseInt(electronic.price*150)}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {electronic.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                )
            })}
        </div>
    );
}

function FetchElectronics() {
    const [Electronics, setElectronics] = useState([]); 
    const [loading, setLoading] = useState(false);
  async function fetchelectronic() {
      try{
        setLoading(true)
        let Electronics = await axios.get('https://fakestoreapi.com/products/category/electronics')
        console.log("Electronics",Electronics.data);
        setElectronics(Electronics.data)
      }
      catch(err){
        console.log("error", err)
      }
      finally{
        setLoading(false)
      }
  }
  useEffect(() => {
      fetchelectronic()
  }, [])
    return [Electronics,loading]
  }

// export default function Electronics() {
//     const [Electronics, loading] = FetchElectronics();
//     if (loading) {
//         return <div>Loading...</div>
//     }
//     return (
//         <div>
//         {Electronics.map((electronic, index) => {
//             return (
//                 <div>
//                     <img style={{width: 50}} src={electronic.image} alt={electronic.category} />
//                     <p>No. {index}</p>
//                     <p>Category: {electronic.category}</p>
//                     <p>Description: {electronic.description}</p>
//                     <p>ID: {electronic.id}</p>
//                     <p>Price: {electronic.price}</p>
//                     <p>Title: {electronic.title}</p>
//                     <hr />
//                 </div>
//             )
//         })}
//     </div>
//     );
// }