import { Typography } from '@mui/material'
import React from 'react'

import {Link,Box, Card, CardMedia, CardContent, Typography} from "@mui/material";


const CardNews = ({propsNews})=> {
  return (
    <>
      <Card className="boxy" sx={{marginBottom: '2em'}}>
        <Box>
          <Typography variant='h6'></Typography>
        </Box>
        <Box className='boxy' sx={{display:'flex', flexDirection:'row', 'alignItems': 'center'}}>
          <CardMedia 
            component="img"
            sx={{width: 151}}
            image={`${propsNews.multimedia[0].url}`}
            alt='image'
          ></CardMedia>
          <CardContent >
            <Typography variant='body1'>{propsNews.title}</Typography>
            <Typography sx={{fontSize: '0.8em'}}>{propsNews.abstract}</Typography>
            <Typography ><Link href={`${propsNews.url}`}>Read More </Link></Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  )
}

export default CardNews