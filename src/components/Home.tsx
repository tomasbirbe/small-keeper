import { Box, Button, Divider, Input, List, ListItem, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { entry } from 'types/types';

import AccountCard from './AccountCard/AccountCard';
import Modal from './Modal/Modal';
import Overlay from './Modal/Overlay';
import Field from './ModalForm/Field';
import ModalForm from './ModalForm/ModalForm';

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
  const [isCreatingEntry, setIsCreatingEntry] = useState<boolean>(false);
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

  function createNewEntry(e: any) {
    e.preventDefault();
    const newEntry = e.target[0].value.trim();

    if (newEntry === '') {
      e.target[0].value = newEntry;

      return '';
    }
    setIsCreatingEntry(true);
    setEntry({ ...entry, name: e.target[0].value });
    e.target[0].value = '';
  }

  function closeNewEntryModal() {
    setIsCreatingEntry(false);
  }

  function createEntry(e: any) {
    e.preventDefault();
    setEntries([
      ...entries,
      {
        ...entry,
        id: Math.random() * 1000 * new Date().getTime(),
        user: e.target[0].value,
        password: e.target[1].value,
      },
    ]);
    setIsCreatingEntry(false);
    e.target[0].value = '';
    e.target[1].value = '';
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
            <ListItem paddingBlock={2} paddingInlineEnd={4} paddingInlineStart={1}>
              <Stack as="form" direction="row" onSubmit={createNewEntry}>
                <Input autoFocus _focus={{}} _hover={{}} border="none" />
                <Button bg="primaryDarker" borderRadius="50%" type="submit">
                  +
                </Button>
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

      {/* Add new entry */}

      <Modal isOpen={isCreatingEntry} zIndex="1">
        <ModalForm id="createForm" showForm={isCreatingEntry} onSubmit={createEntry}>
          <Text fontSize="1.4em">{entry?.name}</Text>
          <Divider />
          <Field id="newUser" label="Usuario" />
          <Field id="newPassword" label="Clave" type="password" />
          <Divider />
          <Stack flexDirection="row" justify="space-between" spacing={0}>
            <Button variant="secondaryAction" onClick={closeNewEntryModal}>
              Cancelar
            </Button>
            <Button form="createForm" type="submit" variant="primaryAction">
              Guardar
            </Button>
          </Stack>
        </ModalForm>
      </Modal>

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
            <Button variant="secondaryAction" onClick={() => setIsDeleting(false)}>
              Cancelar
            </Button>
            <Button _hover={{ bg: 'danger' }} variant="primaryAction" onClick={deleteEntry}>
              Eliminar
            </Button>
          </Stack>
        </Stack>
      </Modal>

      {/* Update modal */}

      <Modal isOpen={isEdit} zIndex="1">
        <ModalForm id="updateForm" showForm={isEdit} onSubmit={saveEntry}>
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
            type="password"
            value={modifiedEntry?.password}
            onChange={(e) => setModifiedEntry({ ...modifiedEntry, password: e.target.value })}
          />
          <Divider />
          <Stack flexDirection="row" justify="space-between" spacing={0}>
            <Button variant="secondaryAction" onClick={abortEdit}>
              Cancelar
            </Button>
            <Button form="updateForm" type="submit" variant="primaryAction">
              Guardar
            </Button>
          </Stack>
        </ModalForm>
      </Modal>

      {/* Account modal */}

      <Modal isOpen={modalIsOpen}>
        <Overlay hideModal={dismissModal} />
        <AccountCard isEntryDataOpen={modalIsOpen}>
          <Text variant="title">{entry?.name}</Text>
          <Text variant="user">{entry?.user}</Text>
          <Text variant="password">{protectPassword(entry?.password)}</Text>

          <Stack align="center" flexDirection="row" justify="space-between" spacing="0">
            <Button type="button" variant="dangerAction" onClick={() => setIsDeleting(true)}>
              Eliminar
            </Button>
            <Button type="button" variant="primaryAction" onClick={() => setIsEdit(true)}>
              Editar
            </Button>
          </Stack>
        </AccountCard>
      </Modal>
    </>
  );
}
