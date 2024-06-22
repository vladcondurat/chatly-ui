import { useNavigate } from 'react-router-dom';
import { ROUTE__EDIT_PROFILE } from '../../../../router/constants';
import {
  PTBImage,
  PTBContainer,
  PTBUsername,
  PTBEmail,
  PTBModifyButton,
  PTBTextWrapper,
  PTBModifyButtonWrapper,
} from './styles';
import PenSvg from './assets/PenSvg.svg';
import genericAvatarImage from '../../../../assets/generic-avatar.png';
import { useAppSelector } from '../../../../hooks/store-hooks';
import { dataUserSelector } from '../../../../store/selectors/user-selectors';

const ProfileTopBar = () => {
  const navigate = useNavigate();
  const user = useAppSelector(dataUserSelector);
  const avatarUrl = user?.avatarUrl || genericAvatarImage;

  return (
    <PTBContainer>
      <PTBImage src={avatarUrl} />
      {user && (
        <PTBTextWrapper>
          <PTBUsername>{user.username}</PTBUsername>
          <PTBEmail>{user.email}</PTBEmail>
        </PTBTextWrapper>
      )}
      <PTBModifyButtonWrapper>
        <PTBModifyButton src={PenSvg} onClick={() => navigate(`${ROUTE__EDIT_PROFILE}`)} />
      </PTBModifyButtonWrapper>
    </PTBContainer>
  );
};

export default ProfileTopBar;
