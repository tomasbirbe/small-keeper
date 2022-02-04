import { List, ListItem, Input } from '@chakra-ui/react';
import React from 'react';
import { entry } from 'types/types';

interface entryState {
  entry: entry | undefined;
  setEntry: React.Dispatch<entry>;
}

const Credentials = ({ entryState, isEdit }: { entryState: entryState; isEdit: boolean }) => {
  const { entry, setEntry } = entryState;

  return (
    <List align="center" justify="flex-start" listStyleType="none">
      <ListItem bg="primaryDarker" fontSize="1em" padding="0">
        <Input
          _disabled={{}}
          border="none"
          borderRadius="15px;"
          disabled={!isEdit}
          paddingBlock={7}
          value={entry?.user}
          onChange={(e) => setEntry(Object.assign({}, entry, { user: e.target.value }))}
        />
      </ListItem>
      <ListItem bg="primaryDarker" fontSize="1em" padding="0">
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
  );
};

export default Credentials;
