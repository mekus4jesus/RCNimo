{isLoading ? (
  <Box className='program' color='#fff' display='flex' justifyContent='center' alignItems='center' p='8em 3em'>
    <Heading as='h2'>isLoading...</Heading>
  </Box>
): (
 <>
   {view === "ImoProgram" ? <ImoProgram /> : <HeadProgram />}
 </>