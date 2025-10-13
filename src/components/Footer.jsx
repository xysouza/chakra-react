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
import { useEffect, useRef, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiMusic } from 'react-icons/fi';

// Custom hook para detectar quando um elemento entra na viewport
// Usado para triggar animações baseadas no scroll
function useInView() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Igual ao Hero, retriggará sempre quando entrar/sair da viewport
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '50px' }, // Trigga 50px antes do elemento aparecer
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

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
    href: 'https://github.com/xysouza/',
    icon: FiGithub,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/adriano-s-oliveira/',
    icon: FiLinkedin,
  },
  {
    id: 'email',
    label: 'E-mail',
    href: 'mailto:devadriano432hz@gmail.com',
    icon: FiMail,
  },
];

function Footer() {
  const [footerRef, footerInView] = useInView();
  const [socialRef, socialInView] = useInView();
  const [copyrightRef, copyrightInView] = useInView();

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
          ref={footerRef}
          columns={{ base: 1, md: 3 }}
          gap={{ base: 10, md: 16 }}
          pb={{ base: 10, md: 12 }}
        >
          <Stack
            spacing={4}
            maxW="sm"
            animation={
              footerInView
                ? 'slide-from-left 700ms ease-out 100ms both'
                : 'none'
            }
            opacity={footerInView ? 1 : 0}
          >
            <Heading
              as="h3"
              fontSize={{ base: '2xl', md: '2xl' }}
              color={COLORS.accent}
              fontFamily="'JetBrains Mono', monospace"
              animation={
                footerInView ? 'fade-in 600ms ease-out 300ms both' : 'none'
              }
            >
              Adriano Oliveira
            </Heading>
            <Text
              color="whiteAlpha.700"
              lineHeight="1.8"
              animation={
                footerInView ? 'fade-in 600ms ease-out 600ms both' : 'none'
              }
              opacity={footerInView ? 1 : 0}
            >
              Desenvolvedor full-stack com paixão por criar soluções que
              impactam. Da rua ao código.
            </Text>
          </Stack>

          <Stack
            spacing={4}
            align={{ base: 'flex-start', md: 'flex-start' }}
            animation={
              footerInView
                ? 'slide-from-bottom 650ms ease-out 300ms both'
                : 'none'
            }
            opacity={footerInView ? 1 : 0}
          >
            <Heading
              as="h4"
              fontSize="lg"
              color="whiteAlpha.900"
              fontFamily="'JetBrains Mono', monospace"
              letterSpacing="0.08em"
              animation={
                footerInView
                  ? 'slide-from-top 500ms ease-out 500ms both'
                  : 'none'
              }
            >
              Links Rápidos
            </Heading>
            <Stack spacing={3}>
              {QUICK_LINKS.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  color="whiteAlpha.700"
                  fontSize="sm"
                  transition="color 0.2s ease"
                  // Animação escalonada para cada link
                  animation={
                    footerInView
                      ? `scale-in 450ms ease-out ${700 + index * 140}ms both`
                      : 'none'
                  }
                  opacity={footerInView ? 1 : 0}
                  _hover={{ color: COLORS.accent }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Stack>

          <Stack
            spacing={4}
            align={{ base: 'flex-start', md: 'flex-start' }}
            animation={
              footerInView
                ? 'slide-from-right 700ms ease-out 450ms both'
                : 'none'
            }
            opacity={footerInView ? 1 : 0}
          >
            <Heading
              as="h4"
              fontSize="lg"
              color="whiteAlpha.900"
              fontFamily="'JetBrains Mono', monospace"
              letterSpacing="0.08em"
              animation={
                footerInView
                  ? 'slide-from-top 500ms ease-out 700ms both'
                  : 'none'
              }
            >
              Conecte-se
            </Heading>
            <HStack
              marginTop="8px"
              ref={socialRef}
              spacing={3}
              animation={
                socialInView ? 'scale-in 500ms ease-out 900ms both' : 'none'
              }
              opacity={socialInView ? 1 : 0}
            >
              {SOCIAL_LINKS.map(({ id, label, href, icon }, index) => {
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
                    // Entrada limpa dos ícones sociais
                    animation={
                      socialInView
                        ? `scale-in 500ms ease-out ${900 + index * 140}ms both`
                        : 'none'
                    }
                    opacity={socialInView ? 1 : 0}
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

        <Box
          h="1px"
          w="full"
          bg={COLORS.border}
          borderRadius="full"
          animation={
            footerInView ? 'expand-width 1s ease-out 1600ms both' : 'none'
          }
          opacity={footerInView ? 1 : 0}
        />

        <Text
          ref={copyrightRef}
          mt={{ base: 8, md: 10 }}
          fontSize="sm"
          color="whiteAlpha.600"
          textAlign="center"
          animation={
            copyrightInView ? 'fade-in 800ms ease-out 200ms both' : 'none'
          }
          opacity={copyrightInView ? 1 : 0}
        >
          © {new Date().getFullYear()} Adriano Oliveira
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
