import React from "react";
import { Img } from 'react-image'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'

export function Cards({card, classes}){

  return(
    <Card>
      <CardMedia>
        <Img src={card.flagPais} />
      </CardMedia>
      <CardContent>
        <Typography>{card.nomePais}</Typography>
        <Typography><hr /></Typography>
      </CardContent>
      <CardContent>
        <Typography>Local: {card.local}</Typography>
        <Typography>Meta: {card.meta}</Typography>
      </CardContent>
    </Card>
  )
}
