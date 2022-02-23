import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const FlexDirection = () => {
  return (
    <>
    <Typography variant='h4'>FlexDirection: 'row'</Typography> <br></br>
    <Box sx={{display: 'flex', FlexDirection: 'row'}}>
        <Box sx={{marginRight: '10px', background: '#d8dee8', padding: '5px', borderRadius: '5px'}}>item 1 </Box>
        <Box sx={{marginRight: '10px', background: '#d8dee8', padding: '5px', borderRadius: '5px'}}>item 2 </Box>
        <Box sx={{marginRight: '10px', background: '#d8dee8', padding: '5px', borderRadius: '5px'}}>item 3 </Box>
    </Box><br></br>



    <Typography variant='h4'>FlexDirection: 'row-reverse'</Typography> <br></br>
    <Box sx={{display: 'flex', flexDirection: 'row-reverse'}}>
        <Box sx={{marginRight: '10px', background: '#d8dee8', padding: '5px', borderRadius: '5px'}}>item 1 </Box>
        <Box sx={{marginRight: '10px', background: '#d8dee8', padding: '5px', borderRadius: '5px'}}>item 2 </Box>
        <Box sx={{marginRight: '10px', background: '#d8dee8', padding: '5px', borderRadius: '5px'}}>item 3 </Box>
    </Box><br></br>

    <Typography variant='h4'>FlexDirection: 'column'</Typography> <br></br>
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <Box sx={{marginRight: '10px', background: '#d8dee8', padding: '5px', borderRadius: '5px'}}>item 1 </Box><br></br>
        <Box sx={{marginRight: '10px', background: '#d8dee8', padding: '5px', borderRadius: '5px'}}>item 2 </Box><br></br>
        <Box sx={{marginRight: '10px', background: '#d8dee8', padding: '5px', borderRadius: '5px'}}>item 3 </Box><br></br>
    </Box><br></br>
    <Typography variant='h4'>FlexDirection: 'column-reverse'</Typography> <br></br>
    <Box sx={{display: 'flex', flexDirection: 'column-reverse', alignItems: 'flex-start'}}>
        <Box sx={{marginRight: '10px', background: '#d8dee8', padding: '5px', borderRadius: '5px'}}>item 1 </Box><br></br>
        <Box sx={{marginRight: '10px', background: '#d8dee8', padding: '5px', borderRadius: '5px'}}>item 2 </Box><br></br>
        <Box sx={{marginRight: '10px', background: '#d8dee8', padding: '5px', borderRadius: '5px'}}>item 3 </Box><br></br>
    </Box><br></br>


    <Typography variant='h4'>FlexWrap: 'nowrap'</Typography> <br></br>
    <Box sx={{display: 'flex', flexWrap: 'nowrap', alignItems: 'flex-start'}}>
        <Box sx={{ height: '50px', width: '500px', marginRight: '10px', background: '#f59002', padding: '5px', borderRadius: '5px'}}>item 1 </Box><br></br>
        <Box sx={{ height: '50px', width: '500px',marginRight: '10px', background: '#f59002', padding: '5px', borderRadius: '5px'}}>item 2 </Box><br></br>
        <Box sx={{height: '50px', width: '500px',marginRight: '10px', background: '#f59002', padding: '5px', borderRadius: '5px'}}>item 3 </Box><br></br>
    </Box><br></br>
    <Typography variant='h4'>FlexWrap: 'wrap'</Typography> <br></br>
    <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start'}}>
        <Box sx={{ height: '50px', width: '500px', marginRight: '10px', background: '#f59002', padding: '5px', borderRadius: '5px'}}>item 1 </Box>
        <Box sx={{ height: '50px', width: '500px',marginRight: '10px', background: '#f59002', padding: '5px', borderRadius: '5px'}}>item 2 </Box>
        <Box sx={{height: '50px', width: '500px',marginRight: '10px', background: '#f59002', padding: '5px', borderRadius: '5px'}}>item 3 </Box>
    </Box><br></br>
    <Typography variant='h4'>FlexWrap: 'wrap-reverse'</Typography> <br></br>
    <Box sx={{display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'flex-start'}}>
        <Box sx={{ height: '50px', width: '500px', marginRight: '10px', background: '#f59002', padding: '5px', borderRadius: '5px'}}>item 1 </Box>
        <Box sx={{ height: '50px', width: '500px',marginRight: '10px', background: '#f59002', padding: '5px', borderRadius: '5px'}}>item 2 </Box>
        <Box sx={{height: '50px', width: '500px',marginRight: '10px', background: '#f59002', padding: '5px', borderRadius: '5px'}}>item 3 </Box>
    </Box><br></br>

    <Typography variant='h4'>flexGrow: </Typography>
    <Box sx={{display: 'flex'}}>
        <Box sx={{marginRight: '10px', background: '#02f5d1', padding: '5px', borderRadius: '5px', flexGrow: 1}}>item 1 </Box>
        <Box sx={{marginRight: '10px', background: '#02f5d1', padding: '5px', borderRadius: '5px'}}>item 2 </Box>
        <Box sx={{marginRight: '10px', background: '#02f5d1', padding: '5px', borderRadius: '5px'}}>item 3 </Box>
    </Box><br></br>
    
    </>
  )
}

export default FlexDirection