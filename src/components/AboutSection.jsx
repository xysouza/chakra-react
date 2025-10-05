import {
  Box,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { FiCode, FiActivity, FiMusic, FiHeart } from 'react-icons/fi';

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
    id: 'dev',
    title: 'O Desenvolvedor',
    icon: FiCode,
    accent: 'accent',
    description: [
      'Estudante de Desenvolvimento de Sistemas, apaixonado por ',
      { text: 'React', color: COLORS.accent },
      ', ',
      { text: 'IA', color: COLORS.accent },
      ' e tecnologias que transformam. Construo aplicações que resolvem problemas reais, com foco em ',
      { text: 'experiência do usuário', color: COLORS.accentWarm },
      ' e código limpo.',
    ],
  },
  {
    id: 'street',
    title: 'A Rua',
    icon: FiActivity,
    accent: 'accent',
    description: [
      'Meus dias na moto como motorista de aplicativo me ensinaram sobre ',
      { text: 'resiliência', color: COLORS.accent },
      ', ',
      { text: 'agilidade', color: COLORS.accent },
      ' e a importância de soluções que funcionam no mundo real. Essa vivência me conecta com as necessidades reais das pessoas.',
    ],
  },
  {
    id: 'music',
    title: 'A Música',
    icon: FiMusic,
    accent: 'accentWarm',
    description: [
      'O violão e o canto são minha válvula de escape criativa. A música me ensinou sobre ',
      { text: 'ritmo', color: COLORS.accentWarm },
      ', ',
      { text: 'harmonia', color: COLORS.accentWarm },
      ' e a beleza da criação. Trago essa sensibilidade para cada interface que desenvolvo.',
    ],
  },
  {
    id: 'mission',
    title: 'A Missão',
    icon: FiHeart,
    accent: 'accent',
    description: [
      'Desenvolvi apps para ajudar meu pai em seu negócio e outros trabalhadores autônomos. Acredito que a tecnologia deve ',
      { text: 'empoderar', color: COLORS.accent },
      ' e ',
      { text: 'facilitar', color: COLORS.accent },
      ' a vida das pessoas, não complicá-la.',
    ],
  },
];

// Lista de tecnologias exibidas nas "chips" inferiores.
const TECH_STACK = [
  'React',
  'TypeScript',
  'Chakra UI',
  'Node.js',
  'Git',
  'IA/ML',
  'Tailwind CSS',
  'REST APIs',
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
      {TECH_STACK.map((label) => (
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
          _hover={{
            color: COLORS.accent,
            borderColor: 'rgba(44,255,153,0.55)',
            boxShadow: '0 10px 28px rgba(44,255,153,0.22)',
          }}
        >
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
