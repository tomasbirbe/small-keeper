import {
  Box,
  Button,
  Divider,
  FormLabel,
  Input,
  List,
  ListItem,
  Stack,
  TagLabel,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { entry } from 'types/types';

import AccountCard from './AccountCard/AccountCard';
import Credentials from './AccountCard/Credentials';
import Modal from './Modal/Modal';
import Overlay from './Modal/Overlay';
import Title from './AccountCard/Title';

const INITIAL_ENTRIES = [
  { id: 1, name: 'Banco Nacion', user: 'Tomas', password: 'Birbe' },
  { id: 2, name: 'Naranja', user: 'Tomas', password: 'Birbe' },
  { id: 3, name: 'League of Legends', user: 'Tomas', password: 'Birbe' },
  { id: 4, name: 'Twitter', user: 'Tomas', password: 'Birbe' },
];

const INITIAL_ENTRY = {
  id: 0,
  name: '',
  user: '',
  password: '',
};

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState(false);
  const [entry, setEntry] = useState<entry>(INITIAL_ENTRY);
  const [entries, setEntries] = useState(INITIAL_ENTRIES);
  const [modifiedEntry, setModifiedEntry] = useState<entry>(INITIAL_ENTRY);

  function openModal(entry: entry) {
    setModalIsOpen(true);
    setEntry(entry);
    setModifiedEntry(entry);
  }

  function dismissModal() {
    setModalIsOpen(false);
    if (isEdit) {
      offEdit();
    }
  }

  function onEdit() {
    setIsEdit(true);
  }

  function offEdit() {
    setIsEdit(false);
  }

  function saveEntry(e: any) {
    e.preventDefault();
    const filterEntries = entries.filter((ent) => ent.id !== entry.id);

    setEntries([...filterEntries, modifiedEntry]);
    setEntry(modifiedEntry);
    offEdit();
  }

  function protectPassword(text: string) {
    const password = text.replace(/./gi, '*');

    return password;
  }

  return (
    <>
      <Box
        as="section"
        display="grid"
        height="full"
        overflow="auto"
        placeItems="start center"
        width="100%"
      >
        <Box as="article" maxWidth="700px" paddingBlock={10} paddingInline={7} width="full">
          <List align="center" justify="flex-start" listStyleType="none">
            {entries.map((entry) => (
              <ListItem key={entry.id} onClick={() => openModal(entry)}>
                {entry.name}
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      <Modal isOpen={isEdit} zIndex="1">
        <Stack
          as="form"
          bg="secondary"
          borderRadius="15px"
          bottom={isEdit ? '0' : '-100%'}
          boxShadow="0px 1.1px 3.5px rgba(0, 0, 0, 0.051),
          0px 2.7px 8.3px rgba(41, 36, 36, 0.073),
          0px 5px 15.7px rgba(0, 0, 0, 0.09),
          0px 8.9px 27.9px rgba(0, 0, 0, 0.107),
          0px 16.7px 52.2px rgba(0, 0, 0, 0.129),
          0px 40px 125px rgba(0, 0, 0, 0.18)"
          height="550px"
          id="updateForm"
          justify="space-around"
          maxWidth="400px"
          minWidth="300px"
          paddingBlock={5}
          paddingInline={8}
          position="relative"
          transition="all 400ms ease-in-out"
          width="90%"
          onSubmit={saveEntry}
        >
          <Box>
            <FormLabel fontSize="1.2em" htmlFor="entryName">
              Entry name
            </FormLabel>
            <Input
              _focus={{}}
              bg="primaryDarker"
              border="none"
              id="entryName"
              value={modifiedEntry?.name}
              onChange={(e) => setModifiedEntry({ ...modifiedEntry, name: e.target.value })}
            />
          </Box>

          <Divider />

          <Box>
            <FormLabel fontSize="1em" htmlFor="user">
              User
            </FormLabel>
            <Input
              _focus={{}}
              bg="primaryDarker"
              border="none"
              id="user"
              value={modifiedEntry?.user}
              onChange={(e) => setModifiedEntry({ ...modifiedEntry, user: e.target.value })}
            />
          </Box>

          <Box marginBlockEnd="1em">
            <FormLabel fontSize="1em" htmlFor="password">
              Password
            </FormLabel>
            <Input
              _focus={{}}
              bg="primaryDarker"
              border="none"
              id="password"
              type="password"
              value={modifiedEntry?.password}
              onChange={(e) => setModifiedEntry({ ...modifiedEntry, password: e.target.value })}
            />
          </Box>

          <Divider />

          <Stack flexDirection="row" justify="space-between" spacing={0}>
            <Button
              _focus={{ bg: 'white', color: 'black' }}
              _hover={{ bg: 'white', color: 'black' }}
              bg="transparent"
              border="1px solid white"
              transition="all 200ms white"
              onClick={offEdit}
            >
              Cancelar
            </Button>
            <Button color="black" form="updateForm" type="submit">
              Guardar
            </Button>
          </Stack>
        </Stack>
      </Modal>

      <Modal isOpen={modalIsOpen}>
        <Overlay hideModal={dismissModal} />
        <AccountCard isEntryDataOpen={modalIsOpen}>
          <Title entryState={{ entry, setEntry }} />
          {/* <Credentials entryState={{ entry, setEntry }} isEdit={isEdit} /> */}
          <List align="center" justify="flex-start" listStyleType="none">
            <ListItem bg="primaryDarker" padding="0">
              <Text
                _disabled={{}}
                border="none"
                borderRadius="15px;"
                disabled={!isEdit}
                paddingBlock={7}
                onChange={(e) => setEntry(Object.assign({}, entry, { user: e.target.value }))}
              >
                {entry?.user}
              </Text>
            </ListItem>
            <ListItem bg="primaryDarker" padding="0">
              <Input
                _disabled={{}}
                border="none"
                borderRadius="15px;"
                disabled={!isEdit}
                paddingBlock={7}
                value={entry?.password}
                onChange={(e) => setEntry(Object.assign({}, entry, { password: e.target.value }))}
              />
            </ListItem>
          </List>
          <Stack align="center" flexDirection="row" justify="space-between" spacing="0">
            <Button
              _hover={{ bg: 'danger', color: 'black', borderColor: 'danger' }}
              bg="transparent"
              border="1px solid white"
              maxWidth="400px"
              type="button"
              width="40%"
              onClick={dismissModal}
            >
              Eliminar
            </Button>
            <Button color="black" maxWidth="400px" type="button" width="40%" onClick={onEdit}>
              Editar
            </Button>
          </Stack>
        </AccountCard>
      </Modal>
    </>
  );
}
