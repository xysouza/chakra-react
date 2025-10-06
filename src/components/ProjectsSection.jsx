import {
  Box,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  Button,
} from '@chakra-ui/react';
import {
  FiShoppingBag,
  FiUsers,
  FiSmartphone,
  FiGithub,
  FiClock,
} from 'react-icons/fi';

const COLORS = {
  accent: '#2CFF99',
  accentWarm: '#FF6B35',
  surface: 'rgba(18, 24, 32, 0.94)',
  cardBorder: 'rgba(255, 255, 255, 0.05)',
  badgeBg: 'rgba(24, 30, 40, 0.9)',
  badgeBorder: 'rgba(255, 255, 255, 0.07)',
};

const ACCENT_TOKENS = {
  accent: {
    iconBg: 'rgba(44,255,153,0.12)',
    iconHover: 'rgba(44,255,153,0.2)',
    glow: 'rgba(44,255,153,0.22)',
  },
  accentWarm: {
    iconBg: 'rgba(255,107,53,0.12)',
    iconHover: 'rgba(255,107,53,0.2)',
    glow: 'rgba(255,107,53,0.24)',
  },
};

// Constantes para garantir alinhamento vertical consistente entre cards
const CARD_LAYOUT = {
  headerMinH: { base: '88px', md: '92px' }, // área ícone + título + badge
  techRowMinH: '44px', // altura reservada das tags de tecnologia
};

const PROJECTS = [
  {
    id: 'meu-corre',
    title: 'App Meu Corre',
    badge: 'FINANÇAS PARA AUTÔNOMOS',
    description:
      'App em React Native e Expo para autônomos gerenciarem suas finanças diárias de forma simples e rápida.',
    techStack: ['React Native', 'Expo', 'AsyncStorage'],
    icon: FiSmartphone,
    ctaLabel: 'Em breve',
    href: '#', // coloque aqui o link do repositório ou demo quando tiver
    accent: 'accent',
  },
  {
    id: 'delivery-ods12',
    title: 'Delivery - ODS 12',
    badge: 'AUTOMAÇÃO E EFICIÊNCIA',
    description:
      'Painel admin responsivo (HTML, CSS, JS, PHP) com bot de WhatsApp em Python para apoio a logística e objetivos ODS 12.',
    techStack: ['PHP', 'Python', 'JavaScript'],
    icon: FiShoppingBag,
    ctaLabel: 'Em breve',
    href: '#',
    accent: 'accent',
  },
  {
    id: 'agendamento-sus',
    title: 'Agendamento de Consultas SUS',
    badge: 'IMPACTO EM SAÚDE (ODS 3)',
    description:
      'Site responsivo para otimizar consultas e reduzir filas nos postos de saúde, focado em acessibilidade e eficiência.',
    techStack: ['JavaScript', 'PHP', 'CSS'],
    icon: FiUsers,
    ctaLabel: 'Em breve',
    href: '#',
    accent: 'accent',
  },
];

function ProjectBadge({ children, accent = 'accent' }) {
  const color = COLORS[accent] ?? COLORS.accent;

  return (
    <Box
      as="span"
      px={3}
      py={1.5}
      borderRadius="full"
      fontSize="xs"
      fontWeight="semibold"
      letterSpacing="0.08em"
      textTransform="uppercase"
      color={color}
      bg="rgba(255,255,255,0.02)"
      border={`1px solid ${COLORS.badgeBorder}`}
    >
      {children}
    </Box>
  );
}

function ProjectCard({ project }) {
  const {
    title,
    badge,
    description,
    techStack,
    icon,
    ctaLabel,
    accent = 'accent',
  } = project;

  const accentColor = COLORS[accent] ?? COLORS.accent;
  const accentTokens = ACCENT_TOKENS[accent] ?? ACCENT_TOKENS.accent;

  return (
    <Box
      role="group"
      borderRadius="2xl"
      bg={COLORS.surface}
      border={`1px solid ${COLORS.cardBorder}`}
      boxShadow="0 18px 42px rgba(8,12,20,0.45)"
      transition="transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease"
      _hover={{
        transform: 'translateY(-4px)',
        borderColor: `${accentColor}99`,
        boxShadow: `0 20px 48px ${accentTokens.glow}`,
      }}
    >
      <Flex
        direction="column"
        gap={6}
        p={{ base: 6, md: 7 }}
        h="100%"
        minH="360px"
      >
        {/* Cabeçalho com tamanho mínimo para alinhar todos os cards */}
        <Flex align="flex-start" gap={4} minH={CARD_LAYOUT.headerMinH}>
          <Flex
            w="52px"
            h="52px"
            borderRadius="lg"
            align="center"
            justify="center"
            bg={accentTokens.iconBg}
            color={accentColor}
            boxShadow={`0 0 0 1px ${accentTokens.iconBg}`}
            transition="all 0.3s ease"
            _groupHover={{
              bg: accentTokens.iconHover,
              boxShadow: `0 0 16px ${accentTokens.glow}`,
            }}
          >
            <Icon as={icon} fontSize="24px" />
          </Flex>
          <Stack spacing={2} flex="1" justify="flex-start">
            <Heading
              as="h3"
              fontSize={{ base: 'xl', md: 'xl' }}
              fontFamily="'JetBrains Mono', monospace"
              color="white"
              lineHeight="1.25"
              noOfLines={2}
            >
              {title}
            </Heading>
            <ProjectBadge accent={accent}>{badge}</ProjectBadge>
          </Stack>
        </Flex>

        <Text fontSize="sm" lineHeight="1.8" color="whiteAlpha.800">
          {description}
        </Text>

        {/* Linha de tecnologias com altura mínima para alinhar botões */}
        <Flex
          wrap="wrap"
          gap={2.5}
          minH={CARD_LAYOUT.techRowMinH}
          alignContent="flex-start"
        >
          {techStack.map((tech) => (
            <Flex
              key={tech}
              px={4}
              py={2}
              borderRadius="full"
              bg={COLORS.badgeBg}
              fontSize="xs"
              fontWeight="medium"
              letterSpacing="0.08em"
              textTransform="uppercase"
              color="whiteAlpha.900"
              border={`1px solid ${COLORS.badgeBorder}`}
            >
              {tech}
            </Flex>
          ))}
        </Flex>

        <Button
          mt="auto"
          h="52px"
          borderRadius="lg"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="sm"
          letterSpacing="0.12em"
          textTransform="uppercase"
          border="1px solid rgba(255,255,255,0.08)"
          bg="rgba(12, 18, 24, 0.82)"
          color="whiteAlpha.900"
          cursor="not-allowed"
          aria-disabled="true"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          _hover={{
            bg: 'rgba(12,18,24,0.9)',
            borderColor: 'rgba(255,255,255,0.15)',
            color: 'whiteAlpha.900',
          }}
          _active={{}}
          _focusVisible={{ boxShadow: 'none' }}
        >
          <Icon as={FiClock} mr={3} opacity={0.85} /> {ctaLabel}
        </Button>
      </Flex>
    </Box>
  );
}

function ProjectsSection() {
  return (
    <Box
      as="section"
      id="projetos"
      py={{ base: 24, md: 32 }}
      px={{ base: 6, md: 12, lg: 20 }}
      bgGradient="linear(180deg, rgba(10,14,20,0.9) 0%, rgba(10,14,20,1) 65%, rgba(10,14,20,1) 100%)"
    >
      <Stack
        spacing={4}
        textAlign="center"
        maxW="4xl"
        mx="auto"
        mb={{ base: 14, md: 20 }}
      >
        <Heading
          as="h2"
          fontSize={{ base: '3xl', md: '4xl' }}
          color={COLORS.accent}
          fontFamily="'JetBrains Mono', monospace"
          letterSpacing="0.08em"
        >
          Projetos
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} color="whiteAlpha.700">
          Soluções desenvolvidas com propósito, focadas em resolver problemas
          reais
        </Text>
      </Stack>

      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        gap={{ base: 6, md: 8 }}
        maxW="7xl"
        mx="auto"
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </SimpleGrid>

      <Stack spacing={4} align="center" mt={{ base: 16, md: 20 }}>
        <Text fontSize="sm" color="whiteAlpha.600">
          Quer ver mais? Confira todos os projetos no meu GitHub.
        </Text>
        <Button
          as="a"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          borderRadius="lg"
          px={{ base: 6, md: 8 }}
          py={{ base: 5, md: 6 }}
          fontFamily="'JetBrains Mono', monospace"
          fontSize="sm"
          letterSpacing="0.14em"
          textTransform="uppercase"
          bg="rgba(12, 18, 24, 0.82)"
          border="1px solid rgba(44,255,153,0.45)"
          color={COLORS.accent}
          transition="all 0.25s ease"
          _hover={{
            bg: 'rgba(44,255,153,0.12)',
            boxShadow: '0 14px 36px rgba(44,255,153,0.26)',
          }}
        >
          <FiGithub /> Todos os Projetos
        </Button>
      </Stack>
    </Box>
  );
}

export default ProjectsSection;
