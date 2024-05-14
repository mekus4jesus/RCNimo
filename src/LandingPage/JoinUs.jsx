import { Box, Button, Heading, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import Join from '../assets/img/join us.jpeg'

const JoinUs = () => {
  const displayAbout = useBreakpointValue({base: 'block', md:'flex', lg: 'flex'})
  const imageWidth = useBreakpointValue({
    base:'150px',md:'300px',lg:'300px'
  })
  const isSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });
    // Function to handle button click to open the Telegram group
    const handleJoinTelegram = () => {
      window.open('https://t.me/RCN_IMO', '_blank');
    };
  return (
    <Box id='JoinUs' m='8rem 0' bgColor='#ab4a4b' color='#fff' p={8}>
     <Box textAlign='center' className='about'>     
      <Heading as='h1'>Join Our Telegram Group</Heading>
    </Box>
    <Box  display={displayAbout} justifyContent='center'>
      <Box className="setMan" boxShadow='md' 
        width={imageWidth}  mt='3rem' bgColor='#ccc' borderRadius='md'>
        <Image 
        objectFit='contain'
        src={Join} 
        alt='Join Our Telegram group' />
      </Box>
      <Box className='aboutText'>
           <Text textAlign='justify' lineHeight='1.5rem'>
            Join our telegram group to get the latest information on RCNimo and Messages by Apostle Sorochi Adiuku
           </Text>
           <Button 
           aria-label='button'
           size={isSize} 
           bgColor='#483E7E' 
           color='#fff' 
           onClick={handleJoinTelegram}
           mt='1.3rem'
           _hover=''>Join Now</Button>
      </Box>
    </Box>
    </Box>
  )
}

export default JoinUs
