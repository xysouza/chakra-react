import {
  Box,
  Flex,
  Heading,
  Link,
  HStack,
  Drawer,
  Portal,
  VStack,
  IconButton,
  CloseButton,
  Button,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { useMemo, useState, useEffect } from 'react';
import { keyframes } from '@emotion/react';
import { smoothScrollTo } from '../utils/smoothScroll';

// Animações para o drawer mobile
const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOutRight = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

// Animação escalonada para os links mobile
const slideUpStaggered = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detecta scroll para deixar o header mais sólido ao rolar
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Função para navegação suave entre seções
  const handleSmoothScroll = (href) => {
    if (href.startsWith('#')) {
      // Ajuste de offset para sticky header (~64px)
      const offset = 72;
      smoothScrollTo(href, { duration: 650, offset, updateHash: true });
    }
    setIsOpen(false); // Fecha o drawer se estiver aberto
  };

  const whatsappHref = useMemo(() => {
    const mensagem =
      'Olá, Adriano! Vim pelo portfólio e gostaria de conversar.';
    return `https://wa.me/5581987352002?text=${encodeURIComponent(mensagem)}`;
  }, []);

  const links = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
  ];

  const accent = '#2CFF99';

  const linkStyles = {
    position: 'relative',
    fontWeight: 'medium',
    color: 'rgba(255,255,255,0.72)',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    px: '4',
    py: '2.5',
    borderRadius: 'full',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '2',
    _hover: {
      color: accent,
      textDecoration: 'none',
      bg: 'rgba(44,255,153,0.08)',
      boxShadow: '0 8px 20px rgba(44,255,153,0.2)',
    },
  };

  const navBg = scrolled ? 'rgba(6,12,18,0.9)' : 'rgba(6,12,18,0.55)';
  const borderColor = scrolled
    ? 'rgba(255,255,255,0.08)'
    : 'rgba(255,255,255,0.04)';
  const shadow = scrolled
    ? '0 10px 28px -8px rgba(0,0,0,0.55)'
    : '0 4px 18px -6px rgba(0,0,0,0.45)';

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="banner"
      backdropFilter="blur(18px) saturate(160%)"
      bg={navBg}
      borderBottom={`1px solid ${borderColor}`}
      boxShadow={shadow}
      transition="background-color .35s ease, box-shadow .35s ease, border-color .35s ease"
      _before={{
        content: '""',
        position: 'absolute',
        inset: '0',
        pointerEvents: 'none',
        background: scrolled
          ? 'linear-gradient(180deg, rgba(44,255,153,0.08) 0%, rgba(44,255,153,0) 60%)'
          : 'linear-gradient(180deg, rgba(44,255,153,0.12) 0%, rgba(44,255,153,0) 70%)',
        opacity: scrolled ? 0.25 : 0.3,
        mixBlendMode: 'overlay',
        borderRadius: '0 0 0 0',
      }}
    >
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        w="full"
        py={{ base: '3', md: '4' }}
        px={{ base: '4', md: '8' }}
        maxW="7xl"
        mx="auto"
      >
        <Heading
          size="md"
          color="white"
          letterSpacing="tight"
          fontFamily="'JetBrains Mono', monospace"
        >
          Adriano Oliveira
        </Heading>

        <HStack spacing="6" display={{ base: 'none', md: 'flex' }}>
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              {...linkStyles}
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll(item.href);
              }}
            >
              {item.label}
            </Link>
          ))}
        </HStack>

        <Button
          as="a"
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          display={{ base: 'none', md: 'inline-flex' }}
          color="#021015"
          bg={accent}
          borderRadius="full"
          fontWeight="semibold"
          px="7"
          py="2.5"
          transition="all 0.2s ease"
          boxShadow="0 18px 40px rgba(44,255,153,0.25)"
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: '0 22px 52px rgba(44,255,153,0.32)',
            filter: 'brightness(1.1)',
          }}
        >
          <FaWhatsapp /> Fale no WhatsApp
        </Button>

        <Drawer.Root
          open={isOpen}
          placement="right"
          onOpenChange={(e) => setIsOpen(e.open)}
        >
          <Drawer.Trigger asChild>
            <IconButton
              aria-label="Abrir menu"
              display={{ base: 'inline-flex', md: 'none' }}
              variant="ghost"
              color="white"
              borderRadius="full"
              size="lg"
              transition="all 0.2s ease"
              _hover={{
                bg: 'rgba(44,255,153,0.08)',
                transform: 'scale(1.05)',
              }}
              _active={{
                transform: 'scale(0.95)',
              }}
              onClick={() => setIsOpen(true)}
            >
              <FiMenu />
            </IconButton>
          </Drawer.Trigger>

          <Portal>
            <Drawer.Backdrop
              bg="blackAlpha.600"
              backdropFilter="blur(10px)"
              css={{
                animation: isOpen
                  ? `${fadeIn} 0.3s ease-out`
                  : `${fadeOut} 0.2s ease-in`,
              }}
            />
            <Drawer.Positioner>
              <Drawer.Content
                bg="rgba(2, 12, 20, 0.96)"
                color="white"
                borderRadius={{ base: '2xl', sm: '3xl' }}
                mx={{ base: '4', sm: '8' }}
                my={{ base: '5', sm: '8' }}
                borderWidth="1px"
                borderColor="rgba(255,255,255,0.06)"
                boxShadow="0 24px 60px rgba(1, 5, 9, 0.65)"
                css={{
                  animation: isOpen
                    ? `${slideInRight} 0.4s cubic-bezier(0.16, 1, 0.3, 1)`
                    : `${slideOutRight} 0.3s cubic-bezier(0.7, 0, 0.84, 0)`,
                }}
              >
                <Drawer.Header
                  borderBottomWidth="1px"
                  borderColor="rgba(255,255,255,0.06)"
                  px={{ base: 5, sm: 6 }}
                  py={{ base: 4, sm: 5 }}
                >
                  <Drawer.Title fontWeight="semibold" color="whiteAlpha.900">
                    Navegação
                  </Drawer.Title>
                  <Drawer.CloseTrigger asChild>
                    <CloseButton
                      size="lg"
                      color="whiteAlpha.900"
                      _hover={{ bg: 'rgba(44,255,153,0.08)' }}
                    />
                  </Drawer.CloseTrigger>
                </Drawer.Header>

                <Drawer.Body
                  display="flex"
                  flexDirection="column"
                  gap={{ base: 6, sm: 8 }}
                  px={{ base: 5, sm: 6 }}
                  py={{ base: 6, sm: 7 }}
                >
                  <VStack as="nav" spacing={3} align="stretch">
                    {links.map((item, index) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        fontSize="lg"
                        color="whiteAlpha.900"
                        fontWeight="medium"
                        px="5"
                        py="3"
                        borderRadius="full"
                        transition="all 0.2s ease"
                        borderWidth="1px"
                        borderColor="rgba(255,255,255,0.08)"
                        bg="rgba(6,14,22,0.86)"
                        css={{
                          animation: isOpen
                            ? `${slideUpStaggered} 0.5s ease-out ${
                                index * 0.1 + 0.2
                              }s both`
                            : 'none',
                        }}
                        _hover={{
                          color: accent,
                          bg: 'rgba(44,255,153,0.1)',
                          borderColor: 'rgba(44,255,153,0.35)',
                          transform: 'translateY(-2px)',
                        }}
                        _active={{
                          transform: 'translateY(0)',
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSmoothScroll(item.href);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </VStack>

                  <Box
                    h="1px"
                    w="full"
                    bg="rgba(255,255,255,0.05)"
                    borderRadius="full"
                    css={{
                      animation: isOpen
                        ? `${slideUpStaggered} 0.5s ease-out 0.5s both`
                        : 'none',
                    }}
                  />

                  <Button
                    as="a"
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    borderRadius="full"
                    bg={accent}
                    color="#021015"
                    fontWeight="semibold"
                    py="3"
                    px="6"
                    boxShadow="0 24px 55px rgba(44,255,153,0.3)"
                    css={{
                      animation: isOpen
                        ? `${slideUpStaggered} 0.6s ease-out 0.6s both`
                        : 'none',
                    }}
                    _active={{ transform: 'translateY(1px)' }}
                    _hover={{
                      transform: 'translateY(-2px)',
                      filter: 'brightness(1.08)',
                      boxShadow: '0 28px 65px rgba(44,255,153,0.35)',
                    }}
                    width="full"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaWhatsapp /> Falar no WhatsApp
                  </Button>
                </Drawer.Body>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </Flex>
    </Box>
  );
};

export default Nav;
