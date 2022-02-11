import {
  Box,
  Button,
  Divider,
  Icon,
  Input,
  List,
  ListItem,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { entry } from 'types/types';

import AccountCard from './AccountCard/AccountCard';
import Modal from './Modal/Modal';
import Overlay from './Modal/Overlay';
import Field from './ModalForm/Field';
import ModalForm from './ModalForm/ModalForm';
import CreateEntryForm from './CreateEntryForm/CreateEntryForm';
import ModalFooter from './Modal/ModalFooter';
import User from './AccountCard/User';
import Password from './AccountCard/Password';

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

/* -------------------------------------------------------------------------- */
/*                                    To do                                   */
/* -------------------------------------------------------------------------- */

/* 
  1- Split code based on its functionality.
  2- Fix tabIndex default or tab order.
  3- Try with Kent c Dodd's modal model.
*/

export default function Home() {
  const [entries, setEntries] = useState(INITIAL_ENTRIES);
  const [entry, setEntry] = useState<entry>(INITIAL_ENTRY);
  const [modifiedEntry, setModifiedEntry] = useState<entry>(INITIAL_ENTRY);
  const [isCreatingEntry, setIsCreatingEntry] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const toast = useToast();

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

  useEffect(() => {
    if (isCreatingEntry) {
      (document.querySelector('#newUser') as HTMLInputElement).focus();
    }
  }, [isCreatingEntry]);

  useEffect(() => {
    if (isEdit === true) {
      (document.querySelector('#modifyAccountName') as HTMLInputElement).focus();
    }
  }, [isEdit]);

  function createNewEntry(e: any) {
    e.preventDefault();
    const newEntry = e.target[0].value.trim();

    if (newEntry === '') {
      e.target[0].value = newEntry;
      toast({
        duration: 2000,
        position: 'top-right',
        render: () => (
          <Box
            bg="primaryDarker"
            borderRadius="15px"
            paddingBlock={2}
            paddingInline={6}
            textAlign="center"
            width="fit-content"
          >
            <Text>La cuenta debe tener un nombre</Text>
          </Box>
        ),
      });

      return '';
    }
    setIsCreatingEntry(true);
    setEntry({ ...entry, name: e.target[0].value });
    e.target[0].value = '';
  }

  function closeNewEntryModal() {
    setIsCreatingEntry(false);
    (document.getElementById('newUser') as HTMLInputElement)!.value = '';
    (document.getElementById('newPassword') as HTMLInputElement)!.value = '';
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
                <Input
                  autoFocus
                  _focus={{}}
                  _hover={{}}
                  border="none"
                  placeholder="Tipea y crea una nueva cuenta!"
                />
                <Button type="submit" variant="iconButton">
                  <Icon as={AiOutlinePlus} />
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
          <CreateEntryForm title={entry?.name} />
          <Divider />
          <ModalFooter secondaryAction={closeNewEntryModal} />
        </ModalForm>
      </Modal>

      {/* Account modal */}

      <Modal isOpen={modalIsOpen}>
        <Overlay hideModal={dismissModal} />
        <AccountCard isEntryDataOpen={modalIsOpen}>
          <Button height="fit-content" onClick={dismissModal}>
            <Icon as={BsChevronDown} boxSize={5} color="primary" />
          </Button>
          <Text variant="title">{entry?.name}</Text>
          <User username={entry?.user} />
          <Password password={entry?.password} />

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

      {/* Update modal */}

      <Modal isOpen={isEdit} zIndex="1">
        <ModalForm id="updateForm" showForm={isEdit} onSubmit={saveEntry}>
          <Field
            id="modifyAccountName"
            label="Nombre de la cuenta"
            value={modifiedEntry?.name}
            onChange={(e) => setModifiedEntry({ ...modifiedEntry, name: e.target.value })}
          />
          <Divider />
          <Field
            id="modifyUser"
            label="Usuario"
            value={modifiedEntry?.user}
            onChange={(e) => setModifiedEntry({ ...modifiedEntry, user: e.target.value })}
          />
          <Divider />
          <Field
            id="modifyPassword"
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
            <Button variant="primaryAction" onClick={() => setIsDeleting(false)}>
              Cancelar
            </Button>
            <Button variant="dangerAction" onClick={deleteEntry}>
              Eliminar
            </Button>
          </Stack>
        </Stack>
      </Modal>
    </>
  );
}
