import { Box, Button, Heading, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { Program } from "./program";
import ImoProgram from "../LandingPage/Programs/ImoProgram";
import HeadProgram from "../LandingPage/Programs/HeadProgram";

export const ProgramChange = () => {
  const [view, setView] = useState('ImoProgram');
  const [isLoading, setIsLoading] = useState(false); // Loading state for both buttons
  const [activeButton, setActiveButton] = useState('ImoProgram'); // State to track the active button

  const isSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });

  const handleViewChange = (program) => {
    if (activeButton !== program) { // Check if the clicked button is not already active
      setActiveButton(program); // Update the active button
      setIsLoading(true); // Set loading state to true when either button is clicked
      setTimeout(() => {
        console.log('Program changed to:', program);
        setView(program);
        setIsLoading(false); // Set loading state back to false after the delay
      }, 2000);
    }
  };

  console.log('Current view:', view);

  return (
    <>
      <Program>
      <Box textAlign='center' className='about'>     
         <Heading as='h1' color='white' pt='3rem'>Programs</Heading>
       </Box>
        <Box display='flex' justifyContent='center' alignItems='center' gap='1rem' pt='2rem' mb='-2rem'>
          <Button
            size={isSize}
            _hover={{ color: '#000', bgColor: '#E07A1C' }}
            borderRadius='md'
            boxShadow='md'
            onClick={() => handleViewChange('ImoProgram')}
            disabled={isLoading || activeButton === 'ImoProgram'} // Disable if loading or already active
            style={{backgroundColor  : activeButton === "ImoProgram" ? "#ccc" : "#5B528B", color: activeButton === 'ImoProgram' ? "#0C0C0C": "#fff"}}
          >
            RCNImo Programs
          </Button>
          <span className="spanDivide"> || </span>
          <Button
            size={isSize}
            _hover={{ color: '#000', bgColor: '#E07A1C' }}
            borderRadius='md'
            boxShadow='md'
            onClick={() => handleViewChange('HeadProgram')}
            disabled={isLoading || activeButton === 'HeadProgram'} // Disable if loading or already active
            style={{backgroundColor : activeButton === "HeadProgram" ? "#ccc" : "#5B528B", color: activeButton === 'HeadProgram' ? "#0C0C0C": "#fff"}}
          >
            National Programs
          </Button>
        </Box>
        {isLoading ? (
           <Box className='program' color='#fff' display='flex' justifyContent='center' alignItems='center' p='8em 3em'>
             <Heading as='h2'>Loading Program ...</Heading>
           </Box>
        ): (
          <>
            {view === "ImoProgram" ? <ImoProgram /> : <HeadProgram />}
          </>
        )}
      </Program>
    </>
  );
};
