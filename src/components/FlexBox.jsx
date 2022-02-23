import { Container, Divider, Typography } from '@mui/material'
import React from 'react'
import FlexDirection from './FlexDirection'

const FlexBox = () => {
  return (
    <Container fixed>
        <Typography variant='h1' textAlign='center'>Flexbox with material UI</Typography><br></br>
        <FlexDirection/>
        <Divider/>
        

    </Container>
  )
}

export default FlexBox