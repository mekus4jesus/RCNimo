import React, { useEffect, useState } from 'react'
import { SkeletonLoading } from './skeleton'
import { Box } from '@chakra-ui/react'

export const PageLoading = ({children}) => {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
     setIsLoading(true)
     setTimeout(() => {
    setIsLoading(false)
   },2500)
  }, [])

  return (
    <Box>
      {isLoading ? (
        <SkeletonLoading  />
      ):(
       <Box>
        {children}
       </Box>
      )}
    </Box>
  )
}

