import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import { PLContainer } from './styles';

const ProfileLayout = () => {
  return (
    <PLContainer>
      <Sidebar />
      <Outlet />
    </PLContainer>
  );
};

export default ProfileLayout;
