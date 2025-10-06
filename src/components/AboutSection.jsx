import {
  Box,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
} from '@chakra-ui/react';
// Ícones das tecnologias (react-icons)
import { FaReact, FaNode, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiChakraui } from 'react-icons/si';
import {
  GiArtificialIntelligence,
  GiCompass,
  GiLightningSpanner,
  GiGalaxy,
} from 'react-icons/gi';
import { RiTailwindCssFill } from 'react-icons/ri';
import { TbApi } from 'react-icons/tb';
import { RxRocket } from 'react-icons/rx';

// Paleta base usada em toda a tela (mantemos em um único lugar).
const COLORS = {
  accent: '#2CFF99',
  accentWarm: '#FF6B35',
  surface: 'rgba(18, 24, 32, 0.94)',
  cardBorder: 'rgba(255, 255, 255, 0.05)',
  badgeBg: 'rgba(24, 30, 40, 0.9)',
  badgeBorder: 'rgba(255, 255, 255, 0.07)',
};

// Tons auxiliares usados para ícones/hover conforme o tom do card.
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

// Conteúdo dos cards principais. Caso precise mudar textos, altere aqui.
const ABOUT_CARDS = [
  {
    id: 'origem',
    title: 'A Origem',
    icon: GiCompass,
    accent: 'accent',
    description: [
      'Minha jornada não começou em um escritório de tecnologia. Começou na área administrativa e nas ruas como motorista de aplicativo. Ali vi a urgência das pessoas, processos ineficientes e a necessidade de ferramentas que funcionem de verdade. Pragmatismo puro, forjado para resolver problemas reais. '
    ],
  },
  {
    id: 'virada',
    title: 'A Virada',
    icon: GiLightningSpanner,
    accent: 'accent',
    description: [
      'Eu via os problemas, mas faltava a ferramenta. No código encontrei o poder de transformar problemas em solução. Programar não é sobre telas bonitas; é devolver tempo, construir pontes e automatizar o caos. É o meio de consertar o que existe e criar o que ainda não existe. ',
    ],
  },
  {
    id: 'arsenal',
    title: 'O Arsenal',
    icon: RxRocket,
    accent: 'accent',
    description: [
      'Tem uma ideia ou processo travado? Eu transformo em produto digital. De um app em React Native a uma plataforma web em React: ouvir, entender a dor e entregar algo intuitivo e robusto. Tecnologia é o arsenal que coloco a serviço da sua necessidade. ',
    ],
  },
  {
    id: 'missao',
    title: 'A Missão',
    icon: GiGalaxy,
    accent: 'accent',
    description: [
      'Procuro parceiros, empresas ou profissionais para criar ferramentas que gerem impacto real. Não busco apenas um trabalho, busco desafios que façam diferença. Se precisa de alguém que se importa com o resultado tanto quanto você, vamos conversar. ',
    ],
  },
];

// Lista de tecnologias exibidas nas "chips" inferiores.
const TECH_STACK = [
  { label: 'React', icon: FaReact, color: '#61DAFB' },
  { label: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { label: 'Chakra UI', icon: SiChakraui, color: '#2CFF99' },
  { label: 'Node.js', icon: FaNode, color: '#8CC84B' },
  { label: 'Git', icon: FaGitAlt, color: '#F1502F' },
  { label: 'IA/ML', icon: GiArtificialIntelligence, color: '#FF6B35' },
  { label: 'Tailwind CSS', icon: RiTailwindCssFill, color: '#38BDF8' },
  { label: 'REST APIs', icon: TbApi, color: '#FFB347' },
];

/**
 * Renderiza os parágrafos dos cards permitindo mesclar texto puro + palavras destacadas.
 * Cada item do array `chunks` é string simples ou objeto `{ text, color }`.
 */
function Description({ chunks }) {
  return (
    <Text fontSize="sm" lineHeight="1.7" color="whiteAlpha.800">
      {chunks.map((chunk, index) =>
        typeof chunk === 'string' ? (
          chunk
        ) : (
          <Box
            as="span"
            key={`${chunk.text}-${index}`}
            color={chunk.color}
            fontWeight="semibold"
          >
            {chunk.text}
          </Box>
        ),
      )}
    </Text>
  );
}

/**
 * Card individual com layout uniforme. O hover apenas eleva e acende a borda
 * com a cor correspondente (verde ou laranja) para manter consistência.
 */
function AboutCard({ icon, title, description, accent = 'accent' }) {
  const accentColor = COLORS[accent];
  const accentTokens = ACCENT_TOKENS[accent];

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
        gap={4}
        p={{ base: 6, md: 7 }}
        borderRadius="inherit"
        minH="220px"
      >
        <Flex
          w="48px"
          h="48px"
          borderRadius="lg"
          align="center"
          justify="center"
          bg={accentTokens.iconBg}
          color={accentColor}
          transition="all 0.3s ease"
          boxShadow={`0 0 0 1px ${accentTokens.iconBg}`}
          _groupHover={{
            bg: accentTokens.iconHover,
            boxShadow: `0 0 14px ${accentTokens.glow}`,
          }}
        >
          <Icon as={icon} fontSize="22px" />
        </Flex>

        <Heading
          as="h3"
          fontSize={{ base: 'lg', md: 'xl' }}
          fontFamily="'JetBrains Mono', monospace"
          color="white"
        >
          {title}
        </Heading>

        <Description chunks={description} />
      </Flex>
    </Box>
  );
}

/**
 * Faixa com as tecnologias (badges). Mantivemos Flex simples para controlar wrap e hover.
 */
function TechBadgeRow() {
  return (
    <Flex
      wrap="wrap"
      justify="center"
      gap={3}
      rowGap={4}
      maxW="5xl"
      mx="auto"
      pt={{ base: 4, md: 6 }}
    >
      {TECH_STACK.map(({ label, icon, color }) => (
        <Flex
          key={label}
          px={{ base: 5, md: 6 }}
          py={{ base: 2.5, md: 3 }}
          borderRadius="full"
          bg={COLORS.badgeBg}
          border={`1px solid ${COLORS.badgeBorder}`}
          color="whiteAlpha.900"
          fontFamily="'JetBrains Mono', monospace"
          fontSize={{ base: 'sm', md: 'sm' }}
          letterSpacing="0.05em"
          textTransform="uppercase"
          boxShadow="0 8px 22px rgba(8,12,20,0.35)"
          transition="all 0.25s ease"
          align="center"
          gap={3}
          _hover={{
            borderColor: color || 'rgba(44,255,153,0.55)',
            boxShadow: `0 10px 28px ${
              color ? color + '55' : 'rgba(44,255,153,0.22)'
            }`,
            color: color || COLORS.accent,
          }}
        >
          <Icon as={icon} fontSize="18px" color={color} />
          {label}
        </Flex>
      ))}
    </Flex>
  );
}

// Componente principal exportado para uso no App.jsx
function AboutSection() {
  return (
    <Box
      as="section"
      id="sobre"
      py={{ base: 20, md: 28 }}
      px={{ base: 6, md: 12, lg: 20 }}
      bgGradient="linear(180deg, rgba(10,14,20,0.7) 0%, rgba(10,14,20,0.92) 55%, rgba(10,14,20,1) 100%)"
    >
      <Stack
        spacing={4}
        textAlign="center"
        maxW="5xl"
        mx="auto"
        mb={{ base: 12, md: 16 }}
      >
        <Heading
          as="h2"
          fontSize={{ base: '3xl', md: '4xl' }}
          color={COLORS.accent}
          fontFamily="'JetBrains Mono', monospace"
          letterSpacing="0.08em"
        >
          Sobre Mim
        </Heading>

        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color="whiteAlpha.700"
          maxW="3xl"
          mx="auto"
        >
          Uma jornada entre o pragmatismo das ruas e a criatividade do código
        </Text>
      </Stack>

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        gap={{ base: 6, md: 10 }}
        maxW="6xl"
        mx="auto"
      >
        {ABOUT_CARDS.map((card) => (
          <AboutCard key={card.id} {...card} />
        ))}
      </SimpleGrid>

      <Stack spacing={6} align="center" mt={{ base: 16, md: 20 }}>
        <Heading
          as="h3"
          fontSize={{ base: '2xl', md: '3xl' }}
          fontFamily="'JetBrains Mono', monospace"
          color="white"
          textTransform="uppercase"
          letterSpacing="0.12em"
        >
          Stack & Ferramentas
        </Heading>
        <TechBadgeRow />
      </Stack>
    </Box>
  );
}

export default AboutSection;
