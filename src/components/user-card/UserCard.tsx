import IUser from '@app/types/user/IUser';

import { UCAvatarImg, UCCheckbox, UCContainer, UCDetailsWrapper, UCUsername } from './styles';

interface UserCardProps {
  user: IUser;
  selected: boolean;
  onSelect: (id: string) => void;
}

const UserCard = ({ user, selected, onSelect }: UserCardProps) => {
  return (
    <UCContainer selected={selected} onClick={() => onSelect(user.id)}>
      <UCDetailsWrapper>
        <UCAvatarImg src={user.avatarUrl} />
        <UCUsername>{user.username}</UCUsername>
      </UCDetailsWrapper>
      <UCCheckbox type="checkbox" checked={selected} readOnly />
    </UCContainer>
  );
};

export default UserCard;
