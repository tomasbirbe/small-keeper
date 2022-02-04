import { Stack, Button, Icon, Input } from '@chakra-ui/react';
import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import { entry } from 'types/types';

interface entryState {
  entry: entry | undefined;
  setEntry: React.Dispatch<entry>;
}

interface params {
  entryState: entryState;
  onEdit: () => void;
  isEdit: boolean;
}

const Title = ({ entryState, onEdit, isEdit }: params) => {
  const { entry, setEntry } = entryState;

  return (
    <Stack align="center" flexDirection="row" justify="space-between" spacing={0}>
      <Button
        _active={{}}
        _hover={{}}
        bg="transparent"
        borderRadius="50%"
        height="50px"
        opacity={isEdit ? '0' : '1'}
        padding="0"
        transition="all 400ms ease-in-out"
        type="button"
        visibility={isEdit ? 'hidden' : 'visible'}
        width="50px"
        onClick={onEdit}
      >
        <Icon as={MdEdit} boxSize={6} />
      </Button>
      <Input
        _disabled={{}}
        bg={isEdit ? 'primaryDarker' : 'transparent'}
        border="none"
        disabled={!isEdit}
        fontSize="1.2em"
        padding="0"
        textAlign="center"
        transition="all 400ms ease-in-out"
        value={entry?.name}
        width={isEdit ? '400px' : '150px'}
        onChange={(e) => setEntry(Object.assign({}, entry, { name: e.target.value }))}
      />
      <Button
        _active={{}}
        _hover={{}}
        bg="transparent"
        borderRadius="50%"
        height="50px"
        opacity={isEdit ? '0' : '1'}
        padding="0"
        transition="all 400ms ease-in-out"
        type="button"
        visibility={isEdit ? 'hidden' : 'visible'}
        width="50px"
      >
        <Icon as={MdDelete} boxSize={6} />
      </Button>
    </Stack>
  );
};

export default Title;
