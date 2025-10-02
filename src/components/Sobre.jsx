import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Button,
  Circle,
  Image,
  Badge,
} from '@chakra-ui/react';
import { FiDownloadCloud } from 'react-icons/fi';
import profileImg from '../assets/img/avatar.jpg';
import ScrollIndicator from './ui/ScrollIndicator';

const Sobre = () => {
  return (
    <Box
      id="sobre"
      position="relative"
      bgGradient="linear(to-b, gray.950, gray.900)"
      color="white"
      minH="100vh"
      overflow="hidden"
      display="flex"
      alignItems="center"
    >
      <Box
        position="absolute"
        top="-18%"
        left="-20%"
        w={{ base: '60%', md: '45%', xl: '35%' }}
        aspectRatio="1"
        borderRadius="full"
        bgGradient="radial(whiteAlpha.200, transparent 70%)"
      />
      <Box
        position="absolute"
        top="-10%"
        right="-15%"
        w={{ base: '55%', md: '40%', xl: '30%' }}
        aspectRatio="1"
        borderRadius="full"
        bgGradient="radial(blue.500, transparent 70%)"
        opacity={0.15}
      />

      <Box
        position="relative"
        w="full"
        px={{ base: 5, md: 12, xl: 20 }}
        py={{ base: 20, md: 24 }}
      >
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          justify="space-between"
          gap={{ base: 12, lg: 16 }}
          w="full"
        >
          <Stack
            spacing={{ base: 5, md: 6 }}
            maxW={{ base: 'full', lg: '2xl' }}
            textAlign={{ base: 'center', lg: 'left' }}
            align={{ base: 'center', lg: 'flex-start' }}
          >
            <Badge
              alignSelf={{ base: 'center', lg: 'flex-start' }}
              colorScheme="blue"
              variant="subtle"
              px={4}
              py={1.5}
              borderRadius="full"
              textTransform="uppercase"
              letterSpacing="widest"
            >
              Front-end & UI/UX
            </Badge>

            <Heading
              fontSize={{ base: '3xl', sm: '3.5rem', md: '4rem' }}
              fontWeight="extrabold"
              lineHeight="1.05"
              letterSpacing="tight"
            >
              Adriano Oliveira
            </Heading>

            <Text
              fontSize={{ base: 'xl', md: '2xl' }}
              color="blue.200"
              fontWeight="semibold"
            >
              Desenvolvedor Front-end & Designer UI/UX
            </Text>

            <Text
              maxW={{ base: 'full', md: 'lg' }}
              color="gray.300"
              fontSize={{ base: 'md', md: 'lg' }}
            >
              Crio experiências digitais elegantes, acessíveis e performáticas,
              conectando marcas a pessoas por meio de narrativas visuais
              cativantes.
            </Text>

            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={{ base: 4, sm: 5 }}
              w={{ base: 'full', sm: 'auto' }}
            >
              <Button
                as="a"
                href="#projetos"
                size="lg"
                borderRadius="full"
                px={{ base: 8, sm: 10 }}
                fontWeight="semibold"
                bgGradient="linear(to-r, blue.400, blue.500)"
                color="white"
                boxShadow="0 20px 45px rgba(59, 130, 246, 0.35)"
                w={{ base: 'full', sm: 'auto' }}
                _hover={{
                  transform: 'translateY(-2px)',
                  bgGradient: 'linear(to-r, blue.400, blue.600)',
                  boxShadow: '0 24px 55px rgba(59, 130, 246, 0.4)',
                }}
                _active={{ transform: 'translateY(0)' }}
              >
                Ver projetos
              </Button>

              <Button
                as="a"
                href="#contato"
                size="lg"
                borderRadius="full"
                px={{ base: 8, sm: 10 }}
                fontWeight="semibold"
                variant="outline"
                borderColor="whiteAlpha.500"
                color="whiteAlpha.900"
                leftIcon={<FiDownloadCloud />}
                w={{ base: 'full', sm: 'auto' }}
                _hover={{
                  bg: 'whiteAlpha.100',
                  borderColor: 'whiteAlpha.700',
                }}
              >
                Baixar CV
              </Button>
            </Stack>
          </Stack>

          <Stack spacing={6} align="center" w={{ base: 'full', lg: 'auto' }}>
            <Box position="relative">
              <Box
                position="absolute"
                inset="-14%"
                borderRadius="full"
                bgGradient="radial(blue.500, transparent 70%)"
                opacity={0.12}
              />
              <Circle
                size={{ base: '220px', md: '260px' }}
                bg="rgba(15, 23, 42, 0.85)"
                border="1px solid"
                borderColor="whiteAlpha.200"
                boxShadow="0 25px 60px rgba(2, 6, 23, 0.45)"
              >
                <Image
                  src={profileImg}
                  alt="Foto de Adriano Oliveira"
                  borderRadius="full"
                  boxSize={{ base: '150px', md: '180px' }}
                />
              </Circle>
            </Box>
          </Stack>
        </Flex>

        <Stack align="center" mt={{ base: 12, md: 16 }}>
          <ScrollIndicator />
        </Stack>
      </Box>
    </Box>
  );
};

export default Sobre;
