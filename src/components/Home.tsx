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
import React, { useRef, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { entry } from 'types/types';

import AccountCard from './AccountCard/AccountCard';
import Modal from './Modal/Modal';
import Overlay from './Modal/Overlay';
import ModalForm from './Modal/ModalForm/ModalForm';
import CreateEntryForm from './CreateEntryForm/CreateEntryForm';
import AccountCardData from './AccountCard/AccountCardData';
import UpdateForm from './UpdateForm/UpdateForm';
import Toast from './Notifications/Toast';

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

const orderEntries = (entryArray: entry[]) => {
  const sortedEntries = entryArray.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  return sortedEntries;
};

/* -------------------------------------------------------------------------- */
/*                                    To do                                   */
/* -------------------------------------------------------------------------- */

/* 
  1- Try with Kent c Dodd's modal model.
*/

export default function Home() {
  const [entries, setEntries] = useState(() => orderEntries(INITIAL_ENTRIES));
  const [entry, setEntry] = useState<entry>(INITIAL_ENTRY);
  const [isCreatingEntry, setIsCreatingEntry] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const testRef = useRef();
  const toast = useToast();

  // Account card

  function openAccountCard(entry: entry) {
    setModalIsOpen(true);
    setEntry(entry);
  }

  function dismissAccountCard() {
    setModalIsOpen(false);
    if (isEdit) {
      setIsEdit(false);
    }
  }

  // Edit mode

  function abortEdit() {
    (document.getElementById('modifyAccountName') as HTMLInputElement).value = entry?.name;
    (document.getElementById('modifyUser') as HTMLInputElement).value = entry?.user;
    (document.getElementById('modifyPassword') as HTMLInputElement).value = entry?.password;
    setIsEdit(false);
  }

  function saveUpdatedEntry(e: any) {
    e.preventDefault();
    const [accountName, username, password] = e.target;
    const modifiedEntry = {
      ...entry,
      name: accountName.value,
      user: username.value,
      password: password.value,
    };
    const deletedEntry = entries.filter((ent) => ent.id !== entry.id);

    const updatedEntries = [...deletedEntry, modifiedEntry];

    setEntries(orderEntries(updatedEntries));
    setEntry(modifiedEntry);
    setIsEdit(false);
  }

  //  New Entry Modal

  function openCreateEntryModal(e: any) {
    e.preventDefault();
    const newEntry = e.target[0].value.trim();

    if (newEntry === '') {
      e.target[0].value = newEntry;
      toast({
        duration: 2000,
        position: 'top-right',
        render: () => <Toast msg="La cuenta debe tener un nombre" />,
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

  // Confirm Delete modal

  function deleteEntry() {
    const filteredEntries = entries.filter((ent) => ent.id !== entry.id);

    setEntries(filteredEntries);
    setIsDeleting(false);
    dismissAccountCard();
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
              <Stack as="form" direction="row" onSubmit={openCreateEntryModal}>
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
              <ListItem key={entry.id} onClick={() => openAccountCard(entry)}>
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

          <Stack flexDirection="row" justify="space-between" spacing={0}>
            <Button variant="secondary" onClick={closeNewEntryModal}>
              Eliminar
            </Button>
            <Button type="submit" variant="primary">
              Guardar
            </Button>
          </Stack>
        </ModalForm>
      </Modal>

      {/* Account modal */}

      <Modal isOpen={modalIsOpen}>
        <Overlay hideModal={dismissAccountCard} />
        <AccountCard isEntryDataOpen={modalIsOpen}>
          <Button height="fit-content" onClick={dismissAccountCard}>
            <Icon as={BsChevronDown} boxSize={5} color="primary" />
          </Button>
          <AccountCardData password={entry?.password} title={entry?.name} username={entry?.user} />

          <Stack flexDirection="row" justify="space-between" spacing={0}>
            <Button type="button" variant="secondary" onClick={() => setIsDeleting(true)}>
              Eliminar
            </Button>
            <Button type="button" variant="primary" onClick={() => setIsEdit(true)}>
              Editar
            </Button>
          </Stack>
        </AccountCard>
      </Modal>

      {/* Update modal */}

      <Modal isOpen={isEdit} zIndex="1">
        <ModalForm id="updateForm" showForm={isEdit} onSubmit={saveUpdatedEntry}>
          <UpdateForm
            accountName={entry?.name}
            inputRef={testRef}
            password={entry?.password}
            username={entry?.user}
          />
          <Stack flexDirection="row" justify="space-between" spacing={0}>
            <Button variant="secondary" onClick={abortEdit}>
              Cancelar
            </Button>
            <Button type="submit" variant="primary">
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
            <Button variant="primary" onClick={() => setIsDeleting(false)}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={deleteEntry}>
              Eliminar
            </Button>
          </Stack>
        </Stack>
      </Modal>
    </>
  );
}
