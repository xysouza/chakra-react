import {
  Box,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Link,
  IconButton,
  HStack,
} from '@chakra-ui/react';
import { FiGithub, FiLinkedin, FiMail, FiMusic } from 'react-icons/fi';

const COLORS = {
  accent: '#2CFF99',
  accentWarm: '#FF6B35',
  surface: 'rgba(8, 12, 18, 0.94)',
  border: 'rgba(255, 255, 255, 0.06)',
  iconBg: 'rgba(17, 24, 32, 0.9)',
};

const QUICK_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
];

const SOCIAL_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/',
    icon: FiGithub,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: FiLinkedin,
  },
  {
    id: 'email',
    label: 'E-mail',
    href: 'mailto:contato@adriano.dev',
    icon: FiMail,
  },
  {
    id: 'music',
    label: 'Playlist',
    href: 'https://open.spotify.com/',
    icon: FiMusic,
  },
];

function Footer() {
  return (
    <Box
      as="footer"
      bg="#060B12"
      color="whiteAlpha.900"
      borderTop={`1px solid ${COLORS.border}`}
      py={{ base: 14, md: 16 }}
      px={{ base: 6, md: 12, lg: 20 }}
    >
      <Box maxW="7xl" mx="auto">
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap={{ base: 10, md: 16 }}
          pb={{ base: 10, md: 12 }}
        >
          <Stack spacing={4} maxW="sm">
            <Heading
              as="h3"
              fontSize={{ base: '2xl', md: '2xl' }}
              color={COLORS.accent}
              fontFamily="'JetBrains Mono', monospace"
            >
              Adriano Oliveira
            </Heading>
            <Text color="whiteAlpha.700" lineHeight="1.8">
              Desenvolvedor full-stack com paixão por criar soluções que
              impactam. Da rua ao código.
            </Text>
          </Stack>

          <Stack spacing={4} align={{ base: 'flex-start', md: 'flex-start' }}>
            <Heading
              as="h4"
              fontSize="lg"
              color="whiteAlpha.900"
              fontFamily="'JetBrains Mono', monospace"
              letterSpacing="0.08em"
            >
              Links Rápidos
            </Heading>
            <Stack spacing={3}>
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  color="whiteAlpha.700"
                  fontSize="sm"
                  transition="color 0.2s ease"
                  _hover={{ color: COLORS.accent }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Stack>

          <Stack spacing={4} align={{ base: 'flex-start', md: 'flex-start' }}>
            <Heading
              as="h4"
              fontSize="lg"
              color="whiteAlpha.900"
              fontFamily="'JetBrains Mono', monospace"
              letterSpacing="0.08em"
            >
              Conecte-se
            </Heading>
            <HStack spacing={3}>
              {SOCIAL_LINKS.map(({ id, label, href, icon }) => {
                const IconComponent = icon;
                return (
                  <IconButton
                    key={id}
                    as="a"
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    aria-label={label}
                    icon={<IconComponent size={22} color="currentColor" />}
                    borderRadius="lg"
                    w={{ base: '50px', md: '54px' }}
                    h={{ base: '50px', md: '54px' }}
                    bg={COLORS.iconBg}
                    border={`1px solid ${COLORS.border}`}
                    color="whiteAlpha.800"
                    transition="all 0.2s ease"
                    _hover={{
                      color: COLORS.accent,
                      borderColor: `${COLORS.accent}55`,
                      transform: 'translateY(-2px)',
                    }}
                  >
                    <IconComponent size={22} color="currentColor" />
                  </IconButton>
                );
              })}
            </HStack>
          </Stack>
        </SimpleGrid>

        <Box h="1px" w="full" bg={COLORS.border} borderRadius="full" />

        <Text
          mt={{ base: 8, md: 10 }}
          fontSize="sm"
          color="whiteAlpha.600"
          textAlign="center"
        >
          © {new Date().getFullYear()} Adriano Oliveira. Desenvolvido com{' '}
          <Box as="span" color={COLORS.accentWarm}>
            ♥
          </Box>{' '}
          e muito{' '}
          <Box as="span" color={COLORS.accent}>
            código
          </Box>
          .
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
