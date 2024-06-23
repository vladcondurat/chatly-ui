import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '@app/hooks/store-hooks';
import { ROUTE__EDIT_PROFILE } from '@app/router/constants';
import { dataUserSelector } from '@app/store/selectors/user-selectors';
import { Pen } from 'lucide-react';

import {
  PTBContainer,
  PTBEmail,
  PTBImage,
  PTBModifyButtonWrapper,
  PTBTextWrapper,
  PTBUsername,
} from './styles';

const ProfileTopBar = () => {
  const navigate = useNavigate();
  const user = useAppSelector(dataUserSelector);

  return (
    <PTBContainer>
      {user && (
        <>
          <PTBImage src={user?.avatarUrl} />
          <PTBTextWrapper>
            <PTBUsername>{user.username}</PTBUsername>
            <PTBEmail>{user.email}</PTBEmail>
          </PTBTextWrapper>
        </>
      )}
      <PTBModifyButtonWrapper onClick={() => navigate(`${ROUTE__EDIT_PROFILE}`)}>
        <Pen size={16} color="#ffffff" strokeWidth={1.5} />
      </PTBModifyButtonWrapper>
    </PTBContainer>
  );
};

export default ProfileTopBar;
