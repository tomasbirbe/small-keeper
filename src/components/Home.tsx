import { Box, Button, Divider, Input, List, ListItem, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { entry } from 'types/types';

import AccountCard from './AccountCard/AccountCard';
import Modal from './Modal/Modal';
import Overlay from './Modal/Overlay';
import Title from './AccountCard/Title';
import UpdateForm from './UpdateForm/UpdateForm';
import Field from './UpdateForm/Field';

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
  const [entries, setEntries] = useState(INITIAL_ENTRIES);
  const [entry, setEntry] = useState<entry>(INITIAL_ENTRY);
  const [modifiedEntry, setModifiedEntry] = useState<entry>(INITIAL_ENTRY);
  const [newEntry, setNewEntry] = useState<string>('');
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  function openModal(entry: entry) {
    setModalIsOpen(true);
    setEntry(entry);
    setModifiedEntry(entry);
  }

  function dismissModal() {
    setModalIsOpen(false);
    if (isEdit) {
      setIsEdit(false);
    }
  }

  function abortEdit() {
    setModifiedEntry(entry);
    setIsEdit(false);
  }

  function deleteEntry() {
    const filteredEntries = entries.filter((ent) => ent.id !== entry.id);

    setEntries(filteredEntries);
    setIsDeleting(false);
    dismissModal();
  }

  function saveEntry(e: any) {
    e.preventDefault();
    const filteredEntries = entries.filter((ent) => ent.id !== entry.id);
    const updatedEntries = [...filteredEntries, modifiedEntry];

    const sortedEntries = updatedEntries.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    setEntries(sortedEntries);
    setEntry(modifiedEntry);
    setIsEdit(false);
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
            <ListItem paddingBlock={2} paddingInline={1}>
              <Stack as="form" justify="center">
                <Input
                  autoFocus
                  _focus={{}}
                  _hover={{}}
                  border="none"
                  onChange={(e) => setNewEntry(e.target.value)}
                />
                <Stack
                  direction="row"
                  display={newEntry ? 'flex' : 'none'}
                  fontSize="0.8em"
                  justify="space-between"
                  paddingBlock={4}
                  paddingInline={4}
                >
                  <Field id="createUser" label="Usuario" />
                  <Field id="createPassword" label="Clave" />
                </Stack>
                <Stack
                  direction="row"
                  display={newEntry ? 'flex' : 'none'}
                  fontSize="0.8em"
                  justify="space-between"
                  paddingBlock={4}
                  paddingInline={4}
                >
                  <Button _active={{}} _hover={{ bg: 'white', color: 'black' }} bg="transparent">
                    Cancelar
                  </Button>
                  <Button _active={{}} color="black" type="submit">
                    Guardar
                  </Button>
                </Stack>
              </Stack>
            </ListItem>
            {entries.map((entry) => (
              <ListItem key={entry.id} onClick={() => openModal(entry)}>
                {entry.name}
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      {/* Confirm delete modal */}

      <Modal isOpen={isDeleting} zIndex="1">
        <Stack
          bg="primary"
          borderRadius="15px"
          opacity={isDeleting ? '1' : '0'}
          padding={7}
          spacing={7}
          transition="all 200ms ease-in-out"
        >
          <Box>
            <Text>Estas a punto de eliminar los datos de</Text>
            <Text fontWeight="700">{entry?.name}</Text>
          </Box>
          <Divider />
          <Stack direction="row" justify="space-between">
            <Button
              _hover={{ border: '1px solid white', bg: 'white', color: 'black' }}
              bg="transparent"
              border="1px solid white"
              color="white"
              onClick={() => setIsDeleting(false)}
            >
              Cancelar
            </Button>
            <Button
              _active={{}}
              _hover={{ bg: 'danger' }}
              bg="white"
              color="black"
              transition="background 200ms ease-in-out"
              onClick={deleteEntry}
            >
              Eliminar
            </Button>
          </Stack>
        </Stack>
      </Modal>

      {/* Update modal */}

      <Modal isOpen={isEdit} zIndex="1">
        <UpdateForm isEdit={isEdit} onSubmit={saveEntry}>
          <Field
            id="entryName"
            label="Nombre de la cuenta"
            value={modifiedEntry?.name}
            onChange={(e) => setModifiedEntry({ ...modifiedEntry, name: e.target.value })}
          />
          <Divider />
          <Field
            id="user"
            label="Usuario"
            value={modifiedEntry?.user}
            onChange={(e) => setModifiedEntry({ ...modifiedEntry, user: e.target.value })}
          />
          <Divider />
          <Field
            id="password"
            label="Clave"
            value={modifiedEntry?.password}
            onChange={(e) => setModifiedEntry({ ...modifiedEntry, password: e.target.value })}
          />
          <Divider />
          <Stack flexDirection="row" justify="space-between" spacing={0}>
            <Button
              _focus={{ bg: 'white', color: 'black' }}
              _hover={{ bg: 'white', color: 'black' }}
              bg="transparent"
              border="1px solid white"
              transition="all 200ms white"
              onClick={abortEdit}
            >
              Cancelar
            </Button>
            <Button color="black" form="updateForm" type="submit">
              Guardar
            </Button>
          </Stack>
        </UpdateForm>
      </Modal>

      {/* Account modal */}

      <Modal isOpen={modalIsOpen}>
        <Overlay hideModal={dismissModal} />
        <AccountCard isEntryDataOpen={modalIsOpen}>
          <Title entryState={{ entry, setEntry }} />
          <Text
            bg="primaryDarker"
            border="none"
            borderRadius="15px;"
            disabled={!isEdit}
            paddingBlock={4}
            paddingInline={4}
          >
            {entry?.user}
          </Text>
          <Text
            bg="primaryDarker"
            border="none"
            borderRadius="15px;"
            disabled={!isEdit}
            paddingBlockEnd={3}
            paddingBlockStart={5}
            paddingInline={4}
          >
            {protectPassword(entry?.password)}
          </Text>

          <Stack align="center" flexDirection="row" justify="space-between" spacing="0">
            <Button
              _hover={{ bg: 'danger', color: 'black', borderColor: 'danger' }}
              bg="transparent"
              border="1px solid white"
              maxWidth="400px"
              type="button"
              width="40%"
              onClick={() => setIsDeleting(true)}
            >
              Eliminar
            </Button>
            <Button
              color="black"
              maxWidth="400px"
              type="button"
              width="40%"
              onClick={() => setIsEdit(true)}
            >
              Editar
            </Button>
          </Stack>
        </AccountCard>
      </Modal>
    </>
  );
}
