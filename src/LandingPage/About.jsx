import { Box, Heading, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import Setman from '../assets/img/AposstleArome.png'

export const About = () => {

  const displayAbout = useBreakpointValue({base: 'block', md:'flex', lg: 'flex'})
  const imageWidth = useBreakpointValue({
    base:'301px',md:'400px',lg:'400px'
  })
  return (
    <Box m='8rem 0' id='about'>
     <Box textAlign='center' className='about'>     
      <Heading as='h1'>About RCN</Heading>
    </Box>
    <Box  display={displayAbout} justifyContent='center'>
      <Box className="setMan" boxShadow='md' 
        width={imageWidth}  mt='3rem' bgColor='#ccc' borderRadius='md'>
        <Image 
        objectFit='contain'
        src={Setman} 
        alt='Apostle Arome Osayi' />
      </Box>
      <Box className='aboutText'>
           <Text textAlign='justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nulla eligendi minima magnam fugiat harum repellat quibusdam architecto, velit vitae dolor. Est odit quam illo amet delectus doloribus ex tempore facilis quidem vel, mollitia totam vitae soluta unde ullam impedit itaque deserunt iusto veniam alias ipsam. Sequi nam explicabo dolores tempore quo accusamus debitis eum ea maiores assumenda iure facere autem, quos eaque, hic, magni mollitia vel corporis modi dolorem in necessitatibus! Ea harum illo veritatis, placeat fugit autem possimus labore corrupti dolorum porro explicabo eos esse fuga quas! Incidunt quam debitis dolore rerum cum, ipsum nesciunt fuga culpa libero, neque, animi quo dolor similique ipsam. Vero, sit magni officia non perferendis earum ipsa voluptate unde odio cum incidunt illo.</Text>
      </Box>
    </Box>
    </Box>
  )
}


