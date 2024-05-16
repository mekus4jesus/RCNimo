import { Button, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import Donation from '../assets/img/donation.jpg'

export const ModalComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const top = useBreakpointValue({base:'-4%', md:'8%'})
  const [scrollBehavior, setScrollBehavior] = useState('inside')
  return (
    <>
      <Button className='donate' colorScheme='white' variant='link'    onClick={onOpen} >
               Donate
    </Button>
   <Modal  blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} scrollBehavior={scrollBehavior}>
    <ModalOverlay />
      <ModalContent style={{ position: 'absolute', top: top, width: '70%',maxWidth: '600px'}}>
          <ModalCloseButton />
            <ModalBody className='modalBody' mt='2rem'>
            <Image src={Donation} alt='Zenit Bank' w='100%' />
            </ModalBody>
          </ModalContent>
          </Modal>
    </>
   
  )
}
