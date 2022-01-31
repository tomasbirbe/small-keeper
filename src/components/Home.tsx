import { Box, List, ListItem, Text, Stack, Button, Icon, Input } from '@chakra-ui/react';
import { MdDelete, MdEdit } from 'react-icons/md';
import React, { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setEdit] = useState(false);

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  function onOpenEdit() {
    setEdit(true);
  }

  function onCloseEdit() {
    setEdit(false);
  }

  return (
    <>
      <Box
        as="section"
        display="grid"
        height="full"
        overflow="auto"
        placeItems="center"
        width="100%"
      >
        <Box as="article" maxWidth="700px" paddingBlock={10} paddingInline={7} width="full">
          <List align="center" justify="flex-start" listStyleType="none">
            <ListItem onClick={onOpen}>
              <Text>Banco nacion</Text>
            </ListItem>
            <ListItem>
              <Text>Naranja</Text>
            </ListItem>
            <ListItem>
              <Text>Facebook</Text>
            </ListItem>
            <ListItem>
              <Text>Twitter</Text>
            </ListItem>
            <ListItem>
              <Text>Twitter</Text>
            </ListItem>
            <ListItem>
              <Text>Twitter</Text>
            </ListItem>
            <ListItem>
              <Text>Twitter</Text>
            </ListItem>
            <ListItem>
              <Text>Twitter</Text>
            </ListItem>
            <ListItem>
              <Text>Twitter</Text>
            </ListItem>
            <ListItem>
              <Text>Twitter</Text>
            </ListItem>
            <ListItem>
              <Text>Twitter</Text>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box
        display="grid"
        height="100%"
        isolation="isolate"
        left="0"
        placeItems="center"
        position="absolute"
        visibility={isOpen ? 'visible' : 'hidden'}
        width="100%"
      >
        <Box
          height="100%"
          left="0"
          position="absolute"
          width="100vw"
          zIndex={1}
          onClick={onClose}
        />
        <Stack
          height="100%"
          maxWidth="700px"
          position="absolute"
          spacing={0}
          visibility={isOpen ? 'visible' : 'hidden'}
          width="100%"
        >
          {/* Notificacion */}

          <Box
            background="danger"
            borderBottomRadius="15px"
            display="grid"
            height="35px"
            placeItems="center"
            position="absolute"
            spacing={0}
            top={isOpen ? '0' : '-50px'}
            transitionDuration="400ms"
            transitionProperty="all"
            transitionTimingFunction="ease-in-out"
            width="100%"
            zIndex={2}
          >
            <Text>Modo edicion</Text>
          </Box>

          {/* Info de la cuenta */}

          <Stack
            background="secondary"
            borderTopRadius="30px"
            bottom={isOpen ? '0' : '-350px'}
            height="350px"
            justify="space-between"
            paddingBlock={5}
            paddingInline={10}
            position="absolute"
            spacing={0}
            transitionDuration="400ms"
            transitionProperty="all"
            transitionTimingFunction="ease-in-out"
            width="full"
            zIndex={2}
          >
            <Stack align="center" flexDirection="row" justify="space-between" spacing={0}>
              <Button
                _active={{}}
                _hover={{}}
                bg="transparent"
                borderRadius="50%"
                height="50px"
                padding="0"
                type="button"
                width="50px"
              >
                <Icon as={MdEdit} boxSize={6} />
              </Button>
              <Input
                disabled
                _disabled={{}}
                border="none"
                fontSize="1.2em"
                padding="0"
                textAlign="center"
                value="Banco Nacion"
                width="200px"
              />
              <Button
                _active={{}}
                _hover={{}}
                bg="transparent"
                borderRadius="50%"
                height="50px"
                padding="0"
                type="button"
                width="50px"
              >
                <Icon as={MdDelete} boxSize={6} />
              </Button>
            </Stack>
            <List align="center" justify="flex-start" listStyleType="none">
              <ListItem bg="primaryDarker" fontSize="1em" padding="0">
                <Input
                  disabled
                  _disabled={{}}
                  border="none"
                  borderRadius="15px;"
                  paddingBlock={7}
                  value="Banco Nacion"
                />
              </ListItem>
              <ListItem bg="primaryDarker" fontSize="1em" padding="0">
                <Input
                  disabled
                  _disabled={{}}
                  border="none"
                  borderRadius="15px;"
                  paddingBlock={7}
                  value="adfasdfasdf"
                />
              </ListItem>
            </List>
            <Button bg="white" color="black" type="button" onClick={onClose}>
              Volver
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
