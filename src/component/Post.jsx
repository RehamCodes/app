import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'

const Post = () => {
  return (
    <div>
        <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton  aria-label="settings">
            <MoreVert/>
          </IconButton>
        }
        title="Reham Salim"
        subheader="September 14, 2017"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://media.tehrantimes.com/d/t/2021/12/03/4/3977563.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
    
        </IconButton>
        <IconButton aria-label="share">
          <Share/>
        </IconButton>
        
      </CardActions>
      
    </Card>
    </div>
  )
}

export default Post