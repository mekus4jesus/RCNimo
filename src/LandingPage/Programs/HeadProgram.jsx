import { Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react'

const HeadProgram = () => {
  const date = new Date().getFullYear()
  const display = useBreakpointValue({base:'block', md:'flex',lg:'flex'})

  const programWidth = useBreakpointValue({ base: '100%', md: '50%', lg: '33.33%' });
  return (
          <Box className='program' display={display}justifyContent='center' alignItems='center' gap='0.7rem'  p='6em 2em'>
          <Box className="programs" w={programWidth}>
            <Heading as='h1'>
              IEC
            </Heading>
            <Text>International Eagle Conference: May {date}</Text>
          </Box>
          <Box className="programs" w={programWidth}>
            <Heading as='h1'>
              FOG
            </Heading>
            <Text>Festival of Glory: November {date}</Text>
          </Box>
          <Box className="programs" w={programWidth}>
            <Heading as='h1'>
            MNC
            </Heading>
            <Text>Minister Conference: November {date}</Text>
          </Box>
        </Box>
  )
}

export default HeadProgram
