import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoChannelTitle, demoChannelUrl, demoVideoTitle } from '../utils/constants';

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
  return (
      <Card>

        <Link to={'/'}>
          <CardMedia component="img" image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} sx={{width: {xs: '100%', sm: '358px'}, height: 180}}/>
        </Link>

      </Card>
  )
}

export default VideoCard
