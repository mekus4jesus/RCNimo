// SkeletonLoading.js
import { Box, Flex, Skeleton, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

export const SkeletonLoading = () => {
  const flexDirection = useBreakpointValue({base:'column', md: 'row'})
  const Height = useBreakpointValue({base:'90px', md: '200px'})
  const MaxHeight = useBreakpointValue({base:'80vh', md: '100vh'})
 
  const skeletonMargin = useBreakpointValue(
    {
      base: {
        marginBottom:'4',
      },
      md:{
        marginRight: '4',
      }
    }
  )
  return (
    <Flex bg='white'  maxHeight={MaxHeight} flexDirection={flexDirection} px={8} m="4rem 0">
    {/* First Section */}
    <Box flex='1' sx={skeletonMargin}>
      <Skeleton height={Height} />
    </Box>

    {/* Second Section */}
    <Box flex='1' sx={skeletonMargin}>
      <Skeleton height={Height} />
    </Box>

    {/* Third Section */}
    <Box flex='1' sx={skeletonMargin}>
      <Skeleton height={Height} />
    </Box>
    {/* fourth Section */}
      <Box flex='1'>
      <Skeleton height={Height} />
    </Box>
  </Flex>
  )
}
