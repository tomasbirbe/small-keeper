import { Box, Button, List, ListItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import { entry } from 'types/types';

import AccountCard from './AccountCard/AccountCard';
import Credentials from './AccountCard/Credentials';
import UpdateNotification from './UpdateNotification';
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

  function openModal(entry: entry) {
    setModalIsOpen(true);
    setEntry(entry);
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

  function saveEntry() {
    const filterEntries = entries.filter((ent) => ent.id !== entry.id);

    setEntries([...filterEntries, entry]);
    dismissModal();
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

      <Modal isOpen={modalIsOpen}>
        <Overlay hideModal={dismissModal} />
        <UpdateNotification isEdit={isEdit} />
        <AccountCard isEntryDataOpen={modalIsOpen}>
          <Title entryState={{ entry, setEntry }} isEdit={isEdit} onEdit={onEdit} />
          <Credentials entryState={{ entry, setEntry }} isEdit={isEdit} />
          <Button
            bg="white"
            color="black"
            type="button"
            onClick={isEdit ? saveEntry : dismissModal}
          >
            {isEdit ? 'Guardar' : 'Volver'}
          </Button>
        </AccountCard>
      </Modal>
    </>
  );
}
