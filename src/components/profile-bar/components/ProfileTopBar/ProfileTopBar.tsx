import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@app/hooks/store-hooks';
import { ROUTE__EDIT_PROFILE } from '@app/router/constants';
import { fetchUserAsyncAction } from '@app/store/actions/user-actions';
import { dataUserSelector } from '@app/store/selectors/user-selectors';
import { Pen } from 'lucide-react';

import {
  PTBContainer,
  PTBContentWrapper,
  PTBEmail,
  PTBImage,
  PTBModifyButtonWrapper,
  PTBTextWrapper,
  PTBUsername,
} from './styles';

const ProfileTopBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector(dataUserSelector);

  useEffect(() => {
    const fetchUser = async () => {
      if (!user) {
        await dispatch(fetchUserAsyncAction());
      }
    };
    fetchUser();
  }, [dispatch, user]);

  return (
    <PTBContainer>
      {user && (
        <PTBContentWrapper>
          <PTBImage src={user.avatarUrl} />
          <PTBTextWrapper>
            <PTBUsername>{user.username}</PTBUsername>
            <PTBEmail>{user.email}</PTBEmail>
          </PTBTextWrapper>
        </PTBContentWrapper>
      )}
      <PTBModifyButtonWrapper onClick={() => navigate(`${ROUTE__EDIT_PROFILE}`)}>
        <Pen size={16} color="#ffffff" strokeWidth={1.5} />
      </PTBModifyButtonWrapper>
    </PTBContainer>
  );
};

export default ProfileTopBar;
