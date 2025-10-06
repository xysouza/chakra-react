import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  HStack,
  Icon,
  IconButton,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import {
  FiGithub,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { TbBrandReactNative } from "react-icons/tb";
import ScrollIndicator from './ui/ScrollIndicator';
import heroBg from '../assets/img/hero-bg.jpg';

const accent = '#2CFF99';
const secondary = '#8CA3AF';

const caretBlink = keyframes`
  0%, 45% { opacity: 1; }
  55%, 100% { opacity: 0; }
`;

const glitchPrimary = keyframes`
  0%, 100% { transform: translate3d(0,0,0); }
  20% { transform: translate3d(-2px,-2px,0); }
  40% { transform: translate3d(2px,1px,0); }
  60% { transform: translate3d(-1px,2px,0); }
  80% { transform: translate3d(1px,-1px,0); }
`;

const glitchLayer = keyframes`
  0% { clip-path: inset(0 0 70% 0); transform: translate3d(-10px,2px,0); }
  20% { clip-path: inset(30% 0 35% 0); transform: translate3d(3px,-2px,0); }
  40% { clip-path: inset(60% 0 10% 0); transform: translate3d(-4px,2px,0); }
  60% { clip-path: inset(10% 0 70% 0); transform: translate3d(2px,-1px,0); }
  80% { clip-path: inset(40% 0 25% 0); transform: translate3d(-3px,1px,0); }
  100% { clip-path: inset(0 0 65% 0); transform: translate3d(0,0,0); }
`;

const tagOptions = [
  { label: 'React', icon: FaReact, color: '#00ffff' },
  { label: 'React Native', icon: TbBrandReactNative, color: '#00ffff' },
  { label: 'NodeJS', icon: FaNodeJs, color: '#FFC857' },
];

const socialLinks = [
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com/xysouza/' },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/adriano-s-oliveira/',
  },
  { icon: FiMail, label: 'E-mail', href: 'mailto:devadriano432hz@gmail.com' },
];

const HeroBackground = () => (
  <>
    <Box
      position="absolute"
      inset="0"
      backgroundImage={`url(${heroBg})`}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      filter="brightness(0.1) saturate(0.1)"
      transform="scale(1.4)"
      pointerEvents="none"
    />
    <Box
      position="absolute"
      inset="0"
      bgGradient="linear(180deg, rgba(10,14,20,2.0) 0%, rgba(10,14,20,2.0) 45%, rgba(10,14,20,2.0) 100%)"
      pointerEvents="none"
    />
    <Box
      position="absolute"
      inset="-30% -40% 20% -40%"
      backgroundImage="radial-gradient(circle at 22% 35%, rgba(0,255,136,0.3), transparent 58%), radial-gradient(circle at 74% 18%, rgba(51,255,170,0.26), transparent 55%), radial-gradient(circle at 50% 95%, rgba(0,255,136,0.2), transparent 68%)"
      filter="blur(46px) saturate(1.15)"
      opacity={0.3}
      pointerEvents="none"
    />
  </>
);

const GlitchHeading = () => (
  <Box position="relative" lineHeight="1.05">
    <Box
      as="span"
      display="block"
      fontFamily="'JetBrains Mono', 'Fira Mono', monospace"
      fontWeight="700"
      fontSize={{ base: '3.4rem', sm: '4.2rem', md: '4.8rem' }}
      color={accent}
      textShadow="0 10px 40px rgba(44,255,153,0.35)"
      position="relative"
      animation={`${glitchPrimary} 4.4s ease-in-out infinite`}
    >
      Adriano Oliveira
    </Box>
    <Box
      as="span"
      display="block"
      fontFamily="'JetBrains Mono', 'Fira Mono', monospace"
      fontWeight="700"
      fontSize={{ base: '3.4rem', sm: '4.2rem', md: '4.8rem' }}
      color="rgba(44,255,153,0.45)"
      position="absolute"
      top="0"
      left="0"
      animation={`${glitchLayer} 3.6s steps(3) infinite`}
      mixBlendMode="screen"
    >
      Adriano Oliveira
    </Box>
  </Box>
);

const HeroIntro = () => (
  <Stack spacing={4} align="center" textAlign="center">
    <Flex
      as="span"
      fontSize={{ base: 'xs', md: 'sm' }}
      color={`${accent}CC`}
      textTransform="uppercase"
      fontWeight="semibold"
      opacity={0.9}
      align="center"
      justify="center"
      lineHeight="1"
      mx="auto"
      position="relative"
      pl="1.4ch" /* reserva espaço exato para o caret */
      fontFamily="'JetBrains Mono','Fira Mono',monospace"
      letterSpacing="0.38em"
    >
      <Box
        as="span"
        position="absolute"
        left={0}
        top="50%"
        transform="translateY(-50%)"
        color={accent}
        fontWeight="bold"
        w="1ch"
        display="flex"
        alignItems="center"
        justifyContent="center"
        animation={`${caretBlink} 1.05s steps(2) infinite`}
        userSelect="none"
        lineHeight="1"
      >
        {'>'}
      </Box>
      <Text as="span" lineHeight="1" display="inline-block">
        Desenvolvedor Full-Stack
      </Text>
    </Flex>

    <GlitchHeading />

    <Text
      fontSize={{ base: 'lg', md: '2xl' }}
      color={secondary}
      maxW="3xl"
      lineHeight="1.65"
    >
      Desenvolvendo {' '}
      <Box as="span" color={accent} fontWeight="semibold" display="inline">
        soluções digitais
      </Box>{' '}
      que impactam, com {' '}
      <Box as="span" color={accent} fontWeight="semibold" display="inline">
        visão estratégica {' '}
      </Box>
       de quem entende o negócio além do código.
    </Text>
  </Stack>
);

const HeroTagList = () => (
  <HStack
    spacing={{ base: 3, md: 4 }}
    justify="center"
    wrap="wrap"
    maxW="lg"
    mx="auto"
  >
    {tagOptions.map(({ label, icon, color }) => (
      <Flex
        key={label}
        px={{ base: 4, md: 5 }}
        py={{ base: 2.5, md: 3 }}
        borderRadius="xl"
        bg="rgba(16, 24, 32, 0.9)"
        border="1px solid rgba(0,255,136,0.18)"
        align="center"
        gap={2}
        fontSize={{ base: 'sm', md: 'sm' }}
        color="whiteAlpha.900"
        boxShadow="0 16px 42px rgba(0, 255, 136, 0.22)"
        backdropFilter="blur(6px)"
      >
        <Icon as={icon} color={color} boxSize="18px" />
        {label}
      </Flex>
    ))}
  </HStack>
);

const HeroPrimaryButton = () => (
  <Button
    as="a"
    href="#projetos"
    borderRadius="full"
    px={{ base: 10, md: 14 }}
    py={{ base: 6, md: 7 }}
    fontWeight="bold"
    fontSize={{ base: 'lg', md: 'xl' }}
    bg={accent}
    color="#02070D"
    boxShadow="0 24px 75px rgba(0,255,136,0.35)"
    w="auto"
    minW={{ base: '240px', sm: '260px', md: 'auto' }}
    _hover={{
      filter: 'brightness(1.12)',
      transform: 'translateY(-3px)',
    }}
    _active={{ transform: 'translateY(0)' }}
  >
    Ver Projetos
  </Button>
);

const HeroSecondaryButton = () => (
  <Button
    as="a"
    href="#sobre"
    borderRadius="full"
    px={{ base: 10, md: 14 }}
    py={{ base: 6, md: 7 }}
    fontWeight="medium"
    fontSize={{ base: 'lg', md: 'xl' }}
    bg="rgba(18,24,32,0.9)"
    color="white"
    border="1px solid rgba(0,255,136,0.18)"
    w="auto"
    minW={{ base: '240px', sm: '260px', md: 'auto' }}
    _hover={{
      borderColor: 'rgba(0,255,136,0.32)',
      bg: 'rgba(22,30,40,0.94)',
    }}
  >
    Sobre Mim
  </Button>
);

const HeroCtaGroup = () => (
  <HStack
    spacing={{ base: 4, md: 6 }}
    flexDirection={{ base: 'column', sm: 'row' }}
    w={{ base: 'full', sm: 'auto' }}
    justify="center"
  >
    <HeroPrimaryButton />
    <HeroSecondaryButton />
  </HStack>
);

const HeroSocialLinks = () => (
  <HStack spacing={{ base: 4, md: 5 }} justify="center">
    {socialLinks.map(({ icon, label, href }) => (
      <IconButton
        key={label}
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        size="lg"
        borderRadius="lg"
        w={{ base: '56px', md: '64px' }}
        h={{ base: '56px', md: '64px' }}
        bg="rgba(16,24,32,0.9)"
        border="1px solid rgba(0,255,136,0.18)"
        color="whiteAlpha.900"
        boxShadow="0 18px 42px rgba(0,0,0,0.55)"
        _hover={{
          color: accent,
          borderColor: 'rgba(0,255,136,0.4)',
          transform: 'translateY(-3px)',
        }}
        _active={{ transform: 'translateY(0)' }}
      >
        <Icon as={icon} boxSize="22px" />
      </IconButton>
    ))}
  </HStack>
);

const Hero = () => (
  <Box
    id="sobre"
    position="relative"
    bg="#0A0E14"
    color="white"
    minH="100vh"
    overflow="hidden"
  >
    <HeroBackground />

    <Flex
      direction="column"
      align="center"
      justify={{ base: 'space-between', md: 'space-between' }}
      gap={{ base: 12, md: 0 }}
      minH="100vh"
      px={{ base: 6, sm: 10, lg: 20 }}
      py={{ base: 14, md: 20, xl: 24 }}
      pb={{ base: 20, md: 24 }}
      position="relative"
      zIndex={1}
    >
      <Stack
        spacing={{ base: 9, md: 12 }}
        align="center"
        textAlign="center"
        maxW="5xl"
        w="full"
        flex="1"
        justify="center"
      >
        <HeroIntro />
        <HeroTagList />
        <HeroCtaGroup />
        <HeroSocialLinks />
      </Stack>

      <Stack align="center" mt={{ base: 6, md: 16 }}>
        <ScrollIndicator
          boxProps={{
            borderColor: 'rgba(0,255,136,0.4)',
            bg: 'rgba(16, 24, 32, 0.88)',
            boxShadow: '0 0 40px rgba(0,255,136,0.3)',
          }}
          iconProps={{ color: accent, fontSize: '26px' }}
        />
      </Stack>
    </Flex>
  </Box>
);

export default Hero;
