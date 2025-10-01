import { Box, Container, Flex, Image, Stack, Text } from '@chakra-ui/react'

const Sobre = () => {
  return (
    <Box id="sobre" bg="gray.900" py={{ base: 16, md: 24 }}>
      <Container maxW="5x1">
        <Flex direction={{ base: "column", md: "column"}} align="center" gap={{ base: 10, md: 16}}>
          <Image
            src="src/assets/img/avatar.jpg"
            boxSize="150px"
            borderRadius="full"
            fit="cover"
            alt="Foto de Adriano Oliveira"
          />
          <Stack>
            <Text fontSize="2xl" fontWeight="bold" color="white" textAlign="center">
              Salve! Sou Adriano Oliveira 👨‍💻
            </Text>
            <Text fontSize="lg" color="gray.300" textAlign="center">
              Desenvolvedor focado em criar soluções simples, bonitas e funcionais.
            </Text>
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Sobre