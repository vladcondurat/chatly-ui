import { Outlet } from 'react-router-dom';

import MobileNav from '@app/components/mobile-nav';
import ProfileBar from '@app/components/profile-bar';
import Sidebar from '@app/components/sidebar';

import { PLContainer, PLOuteletContainer, PLProfileBarContainer } from './styles';

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
