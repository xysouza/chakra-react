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
import { FiShoppingBag, FiUsers, FiSmartphone, FiGithub } from 'react-icons/fi';

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

const PROJECTS = [
  {
    id: 'family-app',
    title: 'App de Gestão Familiar',
    badge: 'IMPACTO REAL NO NEGÓCIO DA FAMÍLIA',
    description:
      'Sistema completo desenvolvido para auxiliar meu pai na gestão de seu pequeno negócio. Controle de estoque, vendas e relatórios em tempo real.',
    techStack: ['React', 'Node.js', 'MongoDB'],
    icon: FiShoppingBag,
    ctaLabel: 'Ver Detalhes',
    href: '#',
    accent: 'accentWarm',
  },
  {
    id: 'autonomy-hub',
    title: 'Autonomy Hub',
    badge: 'AUTONOMIA PARA PROFISSIONAIS AUTÔNOMOS',
    description:
      'Plataforma que conecta motoristas e prestadores com oportunidades de serviço, além de relatórios inteligentes para aumentar ganhos semanais.',
    techStack: ['React Native', 'Expo', 'Firebase'],
    icon: FiUsers,
    ctaLabel: 'Em Breve',
    href: '#',
    accent: 'accent',
  },
  {
    id: 'delivery-connect',
    title: 'Delivery Connect',
    badge: 'AGILIDADE NAS ENTREGAS',
    description:
      'App mobile que otimiza rotas e comunicação entre restaurantes, entregadores e clientes. Reduz tempo ocioso e melhora avaliações.',
    techStack: ['React Native', 'TypeScript', 'Supabase'],
    icon: FiSmartphone,
    ctaLabel: 'Ver Protótipo',
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
    href,
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
      <Flex direction="column" gap={6} p={{ base: 6, md: 7 }} minH="360px">
        <Flex align="flex-start" gap={4}>
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

          <Stack spacing={1}>
            <Heading
              as="h3"
              fontSize={{ base: 'xl', md: 'xl' }}
              fontFamily="'JetBrains Mono', monospace"
              color="white"
            >
              {title}
            </Heading>
            <ProjectBadge accent={accent}>{badge}</ProjectBadge>
          </Stack>
        </Flex>

        <Text fontSize="sm" lineHeight="1.8" color="whiteAlpha.800">
          {description}
        </Text>

        <Flex wrap="wrap" gap={2.5}>
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
          as="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
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
          transition="all 0.25s ease"
          _hover={{
            bg: accentColor,
            color: '#02070D',
            boxShadow: `0 14px 32px ${accentTokens.glow}`,
            borderColor: `${accentColor}CC`,
          }}
        >
          {ctaLabel}
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
