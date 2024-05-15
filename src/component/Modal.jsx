import { Button, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import Zenit from '../assets/img/zenith.jpg'

export const ModalComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const top = useBreakpointValue({base:'-4%', md:'10%'})
  const ZenitBank = useBreakpointValue({base: '50px', md:'100px'})
  const [scrollBehavior, setScrollBehavior] = useState('inside')
  return (
    <>
      <Button className='donate' colorScheme='white' variant='link'    onClick={onOpen} >
               Donate
    </Button>
   <Modal  blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} scrollBehavior={scrollBehavior}>
    <ModalOverlay />
      <ModalContent style={{ position: 'absolute', top: top, width: '70%',maxWidth: '600px'}}>
        <ModalHeader mt='1rem' className='modalHeader'> 
          <Heading as='h4'> FOR YOUR DONATIONS AND PARTNERSHIP  </Heading>  
          </ModalHeader>
          <ModalCloseButton />
            <ModalBody className='modalBody'>
              <Image src={Zenit} alt='Zenit Bank' boxSize={ZenitBank} />
            <Heading as='h5'> Account Details: </Heading> 
            <Text>Remnant Christian Network Imo </Text> 
            <Text> Zenith Bank</Text>  
            <Text>1220907722 </Text>    
          <Text>
          Dollar: 5072809449</Text>
          <Text>Pounds: 5060784305</Text>
          <Text>Euro: 5080645226</Text>
          <Text> Bank address: Zenith Bank Wetheral Road Owerri  </Text>
          <Text>Swift code  ZEIBNGLA </Text>
            </ModalBody>
          </ModalContent>
          </Modal>
    </>
   
  )
}
