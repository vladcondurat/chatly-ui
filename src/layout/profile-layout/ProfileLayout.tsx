import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import { PLContainer, PLOuteletContainer, PLProfileBarContainer } from './styles';
import ProfileBar from '../../components/profile-bar';

const ProfileLayout = () => {
  return (
    <PLContainer>
      <Sidebar />
      <PLProfileBarContainer>
        <ProfileBar />
      </PLProfileBarContainer>
      <PLOuteletContainer>
        <Outlet />
      </PLOuteletContainer>
    </PLContainer>
  );
};

export default ProfileLayout;
