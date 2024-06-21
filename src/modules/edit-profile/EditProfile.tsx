import { useNavigate } from 'react-router-dom';
import EditUserForm from '../../components/edit-user-form';
import { EPContainer, EPGoBackSvg, EPTitleContainer, EPTitleWrapper } from './styles';
import GoBackSvg from '@app/assets/GoBackSvg.svg';
import { ROUTE__PROFILE } from '../../router/constants';

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
