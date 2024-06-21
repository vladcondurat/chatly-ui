import IUser from '../../types/user/IUser';
import {
  UCAvatarImg,
  UCCheckbox,
  UCContainer,
  UCDetailsWrapper,
} from './styles';

interface UserCardProps {
  user: IUser;
  selected: boolean;
  onSelect: (id: string) => void;
}

const UserCard = ({ user, selected, onSelect }: UserCardProps) => {
  return (
    <UCContainer selected={selected} onClick={() => onSelect(user.id)}>
      <UCDetailsWrapper>
        <UCAvatarImg src={`https://i.pravatar.cc/150?u=${user.id}`} />
        <div>{user.username}</div>
      </UCDetailsWrapper>
      <UCCheckbox type="checkbox" checked={selected} readOnly />
    </UCContainer>
  );
};

export default UserCard;
