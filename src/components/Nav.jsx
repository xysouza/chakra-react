import { Flex, Heading, Link, Spacer, HStack, Drawer, Portal, VStack, IconButton, CloseButton } from "@chakra-ui/react"
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex direction="row" align="center" as="nav" bg="bg.info" padding="4">
      <Flex align="center" mr="5">
        <Heading size="md" color="white">Adriano Oliveira</Heading>
      </Flex>

      <Spacer />

      <HStack spacing="8" display={{ base: 'none', md: 'flex' }}>
        <Link href="#" _hover={{ textDecoration: 'underline'}}>Sobre Mim</Link>
        <Link href="#" _hover={{ textDecoration: 'underline'}}>Projetos</Link>
        <Link href="#" _hover={{ textDecoration: 'underline'}}>Contato</Link>
      </HStack>

    <Drawer.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
      <Drawer.Trigger asChild>
        <IconButton aria-label="Search database"
        display={{ base: 'flex', md: 'none' }}
            _hover={{ bg: 'bg.info' }}>
          <FiMenu />
        </IconButton>
        </Drawer.Trigger>

        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content bg="bg.info" color="white">
              <Drawer.Header borderBottomWidth="1px">
                <Drawer.Title>Seções</Drawer.Title>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="lg" _hover={{ bg: 'purple.700' }}/>
                </Drawer.CloseTrigger>
              </Drawer.Header>

              <Drawer.Body>
                <VStack as="nav" spacing={4} align="stretch">
                  <Link href="#sobre" onClick={() => setIsOpen(false)} _hover={{ textDecoration: 'underline' }}>Sobre Mim</Link>
                  <Link href="#projetos" onClick={() => setIsOpen(false)} _hover={{ textDecoration: 'underline' }}>Projetos</Link>
                  <Link href="#contato" onClick={() => setIsOpen(false)} _hover={{ textDecoration: 'underline' }}>Contato</Link>
                </VStack>
              </Drawer.Body>

            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
    </Drawer.Root>

    </Flex>
  )
}

export default Nav;