import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import { PLContainer, PLOuteletContainer, PLProfileBarContainer } from './styles';
import ProfileBar from '../../components/profile-bar';
import MobileNav from '../../components/mobile-nav';

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
      <MobileNav />
    </PLContainer>
  );
};

export default ProfileLayout;
