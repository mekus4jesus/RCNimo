import { Box, Button, Heading, Image, Modal, ModalOverlay, ModalContent, ModalBody, IconButton, ModalCloseButton, useBreakpointValue } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Allgallery } from '../gallery'
import { SkeletonLoading } from '../Skeleton/skeleton'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { PageLoading } from '../Skeleton/PageLoading'

export const GalleryComponent = () => {
  const [visibleImages, setVisibleImages] = useState([])
  const [startIndex, setStartIndex] = useState(0)
  const imagesToShow = 4
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(null)

  useEffect(() => {
    setVisibleImages(Allgallery.slice(0, imagesToShow))
  }, [])

  const cycleImages = () => {
    setIsLoading(true)
    setTimeout(() => {
      const nextIndex = (startIndex + imagesToShow) % Allgallery.length
      const endIndex = nextIndex + imagesToShow
      if (endIndex <= Allgallery.length) {
        setVisibleImages(Allgallery.slice(nextIndex, endIndex))
      } else {
        setVisibleImages([
          ...Allgallery.slice(nextIndex, Allgallery.length),
          ...Allgallery.slice(0, endIndex - Allgallery.length),
        ])
      }
      setStartIndex(nextIndex)
      setIsLoading(false)
    }, 2000)
  }

  const openModal = (index) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentImageIndex(null)
  }

  const showPrevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + Allgallery.length) % Allgallery.length)
  }

  const showNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % Allgallery.length)
  }
  const gridTemplateColumns = useBreakpointValue({base: 'ifr', md:'repeat(4, 1fr)'})
  return (
    <>
     <PageLoading>
     <Box px={8} mt="4rem">
      <Box textAlign='center' className='about'>
        <Heading as='h1' pb='2rem'>
          Photo Gallery
        </Heading>
      </Box>
      {isLoading ? (
        <SkeletonLoading />
      ) : (
        <Box display='grid' gridTemplateColumns={gridTemplateColumns} gap='10px'>
          {visibleImages.map((img, index) => (
            <Image
              key={img.id}
              src={img.imageSrc}
              alt={`Gallery ${img.id}`}
              cursor="pointer"
              onClick={() => openModal(startIndex + index)}
            />
          ))}
        </Box>
      )}
      <Button
        size='md'
        onClick={cycleImages}
        w='100%'
        m='3rem 0'
        sx={{ bgColor: isLoading ? "#ccc" : "#5B528B", color: isLoading ? "#000" : "#fff" }}
        _hover={{ bgColor: '#ccc', color: '#000' }}
      >
        Next Gallery
      </Button>

      <Modal isOpen={isModalOpen} onClose={closeModal} size="xl">
        <ModalOverlay />
        <ModalContent sx={{position:'absolute', top:'10%', width: '70%',maxWidth: '600px'}}>
        <ModalCloseButton />
          <ModalBody position="relative" m='3rem 0' maxWidth='600px'>
            {currentImageIndex !== null && (
              <>
                <Image
                  src={Allgallery[currentImageIndex].imageSrc}
                  alt={`Gallery ${Allgallery[currentImageIndex].id}`}
                  maxH="80vh"
                  mx="auto"
                />
                <IconButton
                  icon={<ChevronLeftIcon />}
                  position="absolute"
                  left="10px"
                  top="50%"
                  transform="translateY(-50%)"
                  onClick={showPrevImage}
                  zIndex="1"
                  color='#fff'
                  bgColor="#5B528B"
                  _hover={{color:'#fff',
                  bgColor:"#5B528B"}}
                />
                <IconButton
                  icon={<ChevronRightIcon />}
                  position="absolute"
                  right="10px"
                  top="50%"
                  transform="translateY(-50%)"
                  onClick={showNextImage}
                  zIndex="1"
                  color='#fff'
                  bgColor="#5B528B"
                  _hover={{color:'#fff',
                  bgColor:"#5B528B"}}
                />
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
    </PageLoading>
    </>
  )
}
