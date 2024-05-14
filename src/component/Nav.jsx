import { Box,IconButton, Image, Link, ListItem, UnorderedList, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../assets/img/logo.jpg';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useState, useEffect, useRef } from 'react';
import { ModalComponent } from './Modal';

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isNavFixed, setIsNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavFixed(window.scrollY > 0); // Set isNavFixed to true when scrolling down
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const aboutRef = useRef(null);
  const programsRef = useRef(null);
  const wordsRef = useRef(null);
  const joinUsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navStyle = useBreakpointValue({
    base: {
      position:'relative',
      width: '100%',
      flexDirection: 'column',
      background: 'linear-gradient(to left,#0F0155, transparent)',
      zIndex: 999,
    },
    md: {
      position: isNavFixed ? 'fixed' : 'relative',
      top: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'linear-gradient(to left,#0F0155, transparent)',
      zIndex: '99999',
    }
  });

  const displayIconButton = useBreakpointValue({ base: 'block', md: 'none', lg: 'none' });
  const displayNavList = useBreakpointValue({ base: isOpen ? 'block' : 'none', md: 'flex' });
  const ImgBoxSize = useBreakpointValue({ base: '60px', md: '80px', lg: '80px' });

  return (
    <>
     <nav>
      <Box style={navStyle} p={4} color='white'>
        <header>
          <Image
            boxShadow='md'
            borderRadius='full'
            boxSize={ImgBoxSize}
            src={Logo}
            alt='Remnant Christian Network Imo Logo'
          />
        </header>
        <IconButton
          aria-label='Toggle navigation'
          position='absolute'
          right='1'
          top='25%'
          display={displayIconButton}
          icon={isOpen ? <CloseIcon  color='#fff'/> : <HamburgerIcon  color='#fff'/>}
          onClick={isOpen ? onClose : onOpen}
          variant='ghost'
          color='white'
        />
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
            },
            display: displayNavList,
          }}
        >
          <ListItem>
            <Link as={RouterLink} to='/' onClick={scrollToTop}> Home</Link>
          </ListItem>
          <ListItem>
            <Link href='#about' ref={aboutRef}> About RCN</Link>
          </ListItem>
          <ListItem>
            <Link href='#programs' ref={programsRef}>Programs </Link>
          </ListItem>
          <ListItem>
            <Link href='#words' ref={wordsRef}>Words From Point Man</Link>
          </ListItem>
          <ListItem>
            <Link href='#JoinUs' ref={joinUsRef}>Join our Platform</Link>
          </ListItem>
          <ListItem>
            <Link href='#'>Gallery</Link>
          </ListItem>
          <ListItem>
            <Link href="https://wa.me/+23407089221883" target="_blank">
               Needs Prayers ?
               </Link>
          </ListItem>
          <ListItem>
           <ModalComponent />
          </ListItem>
        </UnorderedList>
      </Box>
    </nav>
    </>
  );
}

export default Nav;
