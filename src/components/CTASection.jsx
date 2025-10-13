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
import { useEffect, useRef, useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';

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
      { threshold: 0.1, rootMargin: '80px' }, // Trigga 80px antes do elemento aparecer
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

function ContactCard({
  icon,
  label,
  value,
  href,
  index = 0,
  isVisible = false,
}) {
  // Diferentes animações para cada card baseado no índice
  const getCardAnimation = (index) => {
    const animations = [
      'slide-from-left', // Card 1: Email - vem da esquerda
      'slide-from-bottom', // Card 2: Telefone - vem de baixo
      'slide-from-right', // Card 3: Localização - vem da direita
    ];
    return animations[index % animations.length];
  };

  const getAnimationDelay = (index) => {
    return `${index * 200}ms`; // 200ms de delay entre cada card
  };

  return (
    <Box
      role="group"
      borderRadius="2xl"
      bg={COLORS.surface}
      border={`1px solid ${COLORS.cardBorder}`}
      boxShadow="0 18px 42px rgba(4, 8, 14, 0.55)"
      transition="all 0.3s ease"
      // Animação nativa do Chakra UI v3
      animation={
        isVisible
          ? `${getCardAnimation(index)} 800ms ease-out ${getAnimationDelay(
              index,
            )} both`
          : 'none'
      }
      opacity={isVisible ? 1 : 0}
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
          // Entrada limpa do ícone
          animation={
            isVisible
              ? `scale-in 500ms ease-out ${
                  parseInt(getAnimationDelay(index)) + 300
                }ms both`
              : 'none'
          }
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
            // Animação do título
            animation={
              isVisible
                ? `slide-from-top 600ms ease-out ${
                    parseInt(getAnimationDelay(index)) + 200
                  }ms both`
                : 'none'
            }
            opacity={isVisible ? 1 : 0}
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
              // Animação do link
              animation={
                isVisible
                  ? `fade-in 600ms ease-out ${
                      parseInt(getAnimationDelay(index)) + 400
                    }ms both`
                  : 'none'
              }
              opacity={isVisible ? 1 : 0}
            >
              {value}
            </Link>
          ) : (
            <Text
              fontSize="md"
              color="whiteAlpha.700"
              animation={
                isVisible
                  ? `fade-in 600ms ease-out ${
                      parseInt(getAnimationDelay(index)) + 400
                    }ms both`
                  : 'none'
              }
              opacity={isVisible ? 1 : 0}
            >
              {value}
            </Text>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}

function CTASection() {
  const [titleRef, titleInView] = useInView();
  const [cardsRef, cardsInView] = useInView();
  const [whatsappRef, whatsappInView] = useInView();

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
        ref={titleRef}
        spacing={4}
        textAlign="center"
        maxW="4xl"
        mx="auto"
        position="relative"
        zIndex={1}
        animation={titleInView ? 'fade-in 700ms ease-out both' : 'none'}
        opacity={titleInView ? 1 : 0}
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
        ref={cardsRef}
        columns={{ base: 1, md: 3 }}
        gap={{ base: 6, md: 8 }}
        maxW="6xl"
        mx="auto"
        mt={{ base: 12, md: 16 }}
        position="relative"
        zIndex={1}
      >
        {CONTACT_METHODS.map((method, index) => (
          <ContactCard
            key={method.id}
            {...method}
            index={index}
            isVisible={cardsInView}
          />
        ))}
      </SimpleGrid>

      <Stack
        ref={whatsappRef}
        spacing={6}
        align="center"
        mt={{ base: 16, md: 20 }}
        position="relative"
        zIndex={1}
        animation={
          whatsappInView
            ? 'slide-from-bottom 700ms ease-out 200ms both'
            : 'none'
        }
        opacity={whatsappInView ? 1 : 0}
      >
        <Text fontSize={{ base: 'md', md: 'lg' }} color="whiteAlpha.700">
          Tem um projeto em mente? Ou quer apenas trocar uma ideia?
        </Text>
        <Button
          as="a"
          marginTop="8px"
          href="https://wa.me/5581987352002?text=Ol%C3%A1%20Adriano%2C%20vim%20do%20seu%20portf%C3%B3lio!"
          target="_blank"
          rel="noopener noreferrer"
          borderRadius="full"
          px={{ base: 10, md: 12 }}
          py={{ base: 6, md: 6.5 }}
          fontSize={{ base: 'md', md: 'lg' }}
          bg={COLORS.accent}
          color="#031014"
          boxShadow="0 24px 75px rgba(44,255,153,0.32)"
          transition="all .25s ease"
          // Animação especial do WhatsApp com bounce
          animation={
            whatsappInView ? 'bounce 1.2s ease-out 500ms both' : 'none'
          }
          opacity={whatsappInView ? 1 : 0}
          _hover={{ filter: 'brightness(1.08)', transform: 'translateY(-3px)' }}
          _active={{
            transform: 'translateY(-1px)',
            filter: 'brightness(0.98)',
          }}
        >
          <Icon as={FaWhatsapp} mr={3} />
          Falar no WhatsApp
        </Button>
      </Stack>
    </Box>
  );
}

export default CTASection;
