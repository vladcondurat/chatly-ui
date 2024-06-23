import { useEffect, useState } from 'react';

import SearchBar from '@app/components/search-bar';
import UserCard from '@app/components/user-card';
import { useAppDispatch, useAppSelector } from '@app/hooks/store-hooks';
import {
  fetchAllUsersAsyncAction,
  fetchUsersInsideRoomAsyncAction,
  fetchUsersOutsideRoomAsyncAction,
} from '@app/store/actions/user-actions';
import { allUsersSelector } from '@app/store/selectors/user-selectors';

import { ULCardWrapper, ULContainer, ULErrorContainer } from './styles';

interface UserListProps {
  onSelectionChange: (selectedUserIds: string[]) => void;
  fetchType: 'insideRoom' | 'outsideRoom' | 'all';
  roomId?: string;
}

const UserList = ({ onSelectionChange, fetchType, roomId }: UserListProps) => {
  const dispatch = useAppDispatch();
  const usersData = useAppSelector(allUsersSelector);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSelect = (id: string) => {
    setSelectedUsers(prevSelected =>
      prevSelected.includes(id)
        ? prevSelected.filter(userId => userId !== id)
        : [...prevSelected, id]
    );
  };

  useEffect(() => {
    switch (fetchType) {
      case 'insideRoom':
        dispatch(fetchUsersInsideRoomAsyncAction(roomId));
        break;
      case 'outsideRoom':
        dispatch(fetchUsersOutsideRoomAsyncAction(roomId));
        break;
      case 'all':
      default:
        dispatch(fetchAllUsersAsyncAction());
        break;
    }
  }, [dispatch, fetchType, roomId]);

  useEffect(() => {
    onSelectionChange(selectedUsers);
  }, [selectedUsers, onSelectionChange]);

  const filteredUsers = usersData.filter(user =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SearchBar onSearch={setSearchQuery} />
      <ULContainer>
        <ULCardWrapper>
          {filteredUsers.length ? (
            filteredUsers.map(user => (
              <UserCard
                key={user.id}
                user={user}
                selected={selectedUsers.includes(user.id)}
                onSelect={handleSelect}
              />
            ))
          ) : (
            <ULErrorContainer>No users found</ULErrorContainer>
          )}
        </ULCardWrapper>
      </ULContainer>
    </>
  );
};

export default UserList;
