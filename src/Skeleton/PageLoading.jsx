// import React, { useEffect, useState } from 'react'
// import { SkeletonLoading } from './skeleton'
// import { Box } from '@chakra-ui/react'

// export const PageLoading = ({children}) => {
//   const [isLoading, setIsLoading] = useState(true)
//   useEffect(() => {
//    const timer =  setIsLoading(() => {
//     setIsLoading(false)
//    },3500)
//    return () => clearTimeout(timer)
//   }, [])

//   return (
//     <Box>
//       {isLoading ? (
//         <SkeletonLoading />
//       ):(
//        <Box>
//         {children}
//        </Box>
//       )}
//     </Box>
//   )
// }

