import { Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react'

const ImoProgram = () => {
  const display = useBreakpointValue({base:'block', md:'flex',lg:'flex'})

  const programWidth = useBreakpointValue({ base: '100%', md: '50%', lg: '33.33%' });
  return (
          <Box className='program' display={display}justifyContent='center' alignItems='center' gap='0.7rem'  p='6em 2em'>
          <Box className="programs" w={programWidth}>
            <Heading as='h1'>
              10 Hours
            </Heading>
            <Text>Every First Saturday of the Month</Text>
          </Box>
          <Box className="programs" w={programWidth}>
            <Heading as='h1'>
              Night of Travail 
            </Heading>
            <Text>Every Friday Starts by 10pm - 4am</Text>
          </Box>
          <Box className="programs" w={programWidth}>
            <Heading as='h1'>
            Prayer Shift
            </Heading>
            <Text>Every Wednesday by 5pm - 7pm</Text>
          </Box>
          <Box className="programs" w={programWidth}>
            <Heading as='h1'>
            Sister Shift
            </Heading>
            <Text>Every 3rd Wednesday by 5pm - 7pm</Text>
          </Box>
        </Box>
  )
}

export default ImoProgram
