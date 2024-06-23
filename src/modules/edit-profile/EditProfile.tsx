import { useNavigate } from 'react-router-dom';

import GoBackSvg from '@app/assets/GoBackSvg.svg';
import EditUserForm from '@app/components/edit-user-form';
import { ROUTE__PROFILE } from '@app/router/constants';

import { EPContainer, EPGoBackSvg, EPTitleContainer, EPTitleWrapper } from './styles';

const EditProfile = () => {
  const navigate = useNavigate();

  return (
    <EPContainer>
      <EPTitleContainer>
        <EPGoBackSvg src={GoBackSvg} onClick={() => navigate(`${ROUTE__PROFILE}`)} />
        <EPTitleWrapper>Edit Profile</EPTitleWrapper>
      </EPTitleContainer>
      <EditUserForm />
    </EPContainer>
  );
};

export default EditProfile;
