import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Feed = () => {
  return (
      <Stack sx={{flexDirection: {sx: 'column', md: 'row'}}}>

          <Box>

            <Typography className='copyright' variant='body2' sx={{mt: 1.5, color: '#fff',}}>
            Copyright © 2022 JSM Media 
            </Typography>

          </Box>

          <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>

            <Typography variant='h4' fontWeight="bold" mb={2} sx={{color: 'white'}}>

            </Typography>

          </Box>

      </Stack>
  )
}

export default Feed
