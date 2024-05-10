import { Box } from '@chakra-ui/react'
import React from 'react'

export const Program = ({children}) => {
  return (
    <Box bgColor='#ab4a4b' m='7rem 0' id='programs'>
       {children}
    </Box>
  )
}


