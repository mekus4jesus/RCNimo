import { Box, Heading, Icon, Image, Link, ListItem, Text, UnorderedList, useBreakpointValue } from '@chakra-ui/react'
import Logo from '../assets/img/logo.jpg'
import { PhoneIcon } from '@chakra-ui/icons'
import { HiHome } from 'react-icons/hi'
import { MdEmail, MdFacebook } from 'react-icons/md'
import { IoLogoWhatsapp, IoLogoYoutube } from 'react-icons/io'
import { SiTelegram } from 'react-icons/si'
import { ModalComponent } from './Modal'

const Footer = () => {
  const ImgBoxSize =  useBreakpointValue({base: '60px', md: '80px',lg: '80px'})
  const footerdisplay = useBreakpointValue({base:'block', md:'flex', lg:'flex'})
  const IconSize = useBreakpointValue({base: 5, md: 10, lg: 10})
  return (
    <footer aria-label='footer'>
        <Box bg='#251864' w='100%'  color='white' mt='9rem' p='4rem 5rem' className='footers' display={footerdisplay} justifyContent='space-between'>
        <Box className='footer'>
        <Image 
        boxSize={ImgBoxSize}
        borderRadius='full'
        boxShadow='md'
        src={Logo} 
        alt='Remnant Christian Network Imo' />
        </Box>
        <Box className='footer'>
        <Heading as='h4'> QUICK LINKS </Heading>
        <UnorderedList 
        sx={{
          listStyleType: 'none',
          '> li > a': {
            textDecoration: 'none',
            transition: 'color 0.3s ease-in-out',
            _hover: {
              textDecoration: 'none',
              color: '#D72B35'
            }
          }
           }
           }>
             <ListItem>
              <Link href='#home'> Home</Link>
            </ListItem>
            <ListItem>
              <Link href='#about'> About RCN</Link>
            </ListItem>
            <ListItem>
              <Link href='#programs'>Programs </Link>
            </ListItem>
            <ListItem>
              <Link href='#words'>Words From Point Man</Link>
            </ListItem>
            <ListItem>
            <Link href='#JoinUs' >Join our Platform</Link>
          </ListItem>
            <ListItem>
              <Link href=''>Gallery</Link>
            </ListItem>
            <ListItem>
              <Link href="https://wa.me/+23407089221883" target="_blank">Needs Prayers ?</Link>
            </ListItem>
            <ListItem>
           <ModalComponent />
          </ListItem>
        </UnorderedList>
        </Box>
        <Box className="footer">
        <Heading as='h4'> Contact </Heading>
        <Heading as='h5'>Prayer Tent:</Heading> 
        <Text className='address'> <Icon as={ HiHome}  color='#fff' boxSize={4}/> 29 Oduobi Crescent Behind Destiny Supermarket Ikenegbu Layout Owerri</Text>
        <Text className="email"><Icon as={MdEmail}  boxSize={4}/> RcnImo@gmail.com</Text>
        <Text className='telnumber'><PhoneIcon /> +2348065439187 || +23409012273375</Text>
        </Box>
        <Box className="footer">
          <Heading as='h4'>Socials</Heading>
           <Box className="socials" display='flex' gap={3}>
              <Box className="social">
                <Link href='https://web.facebook.com/rcnimoofficial' target='_blank'><Icon as={MdFacebook}  boxSize={IconSize}/>
                </Link>
              </Box>
              <Box className="social">
                <Link href='https://www.youtube.com/@rcnimo' target='_blank'>
                <Icon as={IoLogoYoutube}  boxSize={IconSize}/>
                </Link>
              </Box>
              <Box className="social">
                <Link href="#">
                <Icon as={IoLogoWhatsapp} boxSize={IconSize}/>
                </Link>
              </Box>
              <Box className="social">
                <Link href="https://t.me/RCN_IMO" target='_blank'>
                <Icon as={SiTelegram} boxSize={IconSize} />
                </Link>
              </Box>
           </Box>
        </Box>
      </Box>
  </footer>
  )
}

export default Footer
