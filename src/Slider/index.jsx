import { Box, useBreakpointValue } from '@chakra-ui/react';
import { GlideComponent } from '../component/glide';
import MobileHero from '../component/MobileHero';


export const SliderComponent = () => {
  const IsResponsive = useBreakpointValue({base:MobileHero,md:GlideComponent,lg:GlideComponent})

  return (
    <Box position='relative' w='100%'  bgColor='#ab4a4b' p='4rem 0' >
      <IsResponsive  />
    </Box>
  );
}
