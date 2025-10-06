import {
  Box,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  Button,
  Link,
} from '@chakra-ui/react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const COLORS = {
  accent: '#2CFF99',
  surface: 'rgba(13, 18, 26, 0.94)',
  cardBorder: 'rgba(255, 255, 255, 0.06)',
  iconBg: 'rgba(44, 255, 153, 0.14)',
  iconHover: 'rgba(44, 255, 153, 0.24)',
};

const CONTACT_METHODS = [
  {
    id: 'email',
    label: 'Email',
    value: 'devadriano432hz@gmail.com',
    icon: FiMail,
    href: 'mailto:devadriano432hz@gmail.com',
  },
  {
    id: 'phone',
    label: 'Telefone',
    value: '+55 (81) 98735-2002',
    icon: FiPhone,
    href: 'tel:+5581987352002',
  },
  {
    id: 'location',
    label: 'Localização',
    value: 'Olinda, PE',
    icon: FiMapPin,
    href: 'https://maps.google.com/?q=Olinda,+PE',
  },
];

function ContactCard({ icon, label, value, href }) {
  return (
    <Box
      role="group"
      borderRadius="2xl"
      bg={COLORS.surface}
      border={`1px solid ${COLORS.cardBorder}`}
      boxShadow="0 18px 42px rgba(4, 8, 14, 0.55)"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-4px)',
        borderColor: `${COLORS.accent}88`,
        boxShadow: '0 22px 52px rgba(44,255,153,0.24)',
      }}
      px={{ base: 6, md: 8 }}
      py={{ base: 7, md: 8 }}
    >
      <Stack spacing={5} align="center" textAlign="center">
        <Flex
          align="center"
          justify="center"
          w="58px"
          h="58px"
          borderRadius="xl"
          bg={COLORS.iconBg}
          color={COLORS.accent}
          transition="background 0.3s ease, box-shadow 0.3s ease"
          boxShadow="0 0 0 1px rgba(44,255,153,0.2)"
          _groupHover={{
            bg: COLORS.iconHover,
            boxShadow: '0 0 18px rgba(44,255,153,0.3)',
          }}
        >
          <Icon as={icon} boxSize="24px" />
        </Flex>

        <Stack spacing={2} align="center">
          <Text
            fontSize="lg"
            color="white"
            fontFamily="'JetBrains Mono', monospace"
            letterSpacing="0.08em"
            textTransform="uppercase"
          >
            {label}
          </Text>
          {href ? (
            <Link
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={
                href.startsWith('mailto:') ? undefined : 'noopener noreferrer'
              }
              fontSize="md"
              color="whiteAlpha.700"
              _hover={{ color: COLORS.accent }}
            >
              {value}
            </Link>
          ) : (
            <Text fontSize="md" color="whiteAlpha.700">
              {value}
            </Text>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}

function CTASection() {
  return (
    <Box
      as="section"
      id="contato"
      position="relative"
      py={{ base: 20, md: 24 }}
      px={{ base: 6, md: 12, lg: 20 }}
      bgGradient="linear(180deg, rgba(9,12,18,1) 0%, rgba(9,12,18,0.96) 60%, rgba(9,12,18,1) 100%)"
      overflow="hidden"
    >
      <Box
        position="absolute"
        inset="-20% -35% 0 -35%"
        backgroundImage="radial-gradient(circle at 50% 0%, rgba(44,255,153,0.25), transparent 65%)"
        filter="blur(48px)"
        opacity={0.35}
        pointerEvents="none"
      />

      <Stack
        spacing={4}
        textAlign="center"
        maxW="4xl"
        mx="auto"
        position="relative"
        zIndex={1}
      >
        <Heading
          as="h2"
          fontSize={{ base: '3xl', md: '4xl' }}
          color={COLORS.accent}
          fontFamily="'JetBrains Mono', monospace"
          letterSpacing="0.12em"
        >
          Vamos Conversar?
        </Heading>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color="whiteAlpha.700"
          maxW="3xl"
          mx="auto"
        >
          Estou sempre aberto a novos projetos e oportunidades de colaboração
        </Text>
      </Stack>

      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        gap={{ base: 6, md: 8 }}
        maxW="6xl"
        mx="auto"
        mt={{ base: 12, md: 16 }}
        position="relative"
        zIndex={1}
      >
        {CONTACT_METHODS.map((method) => (
          <ContactCard key={method.id} {...method} />
        ))}
      </SimpleGrid>

      <Stack
        spacing={6}
        align="center"
        mt={{ base: 16, md: 20 }}
        position="relative"
        zIndex={1}
      >
        <Text fontSize={{ base: 'md', md: 'lg' }} color="whiteAlpha.700">
          Tem um projeto em mente? Ou quer apenas trocar uma ideia sobre
          tecnologia e música?
        </Text>
        <Button
          as="a"
          href="mailto:contato@adriano.dev"
          leftIcon={<Icon as={FiSend} boxSize="20px" />}
          borderRadius="full"
          px={{ base: 10, md: 12 }}
          py={{ base: 6, md: 6.5 }}
          fontWeight="bold"
          fontSize={{ base: 'md', md: 'lg' }}
          bg={COLORS.accent}
          color="#031014"
          boxShadow="0 24px 75px rgba(44,255,153,0.32)"
          _hover={{ filter: 'brightness(1.1)', transform: 'translateY(-3px)' }}
          _active={{ transform: 'translateY(-1px)' }}
        >
          Enviar Mensagem
        </Button>
      </Stack>
    </Box>
  );
}

export default CTASection;
