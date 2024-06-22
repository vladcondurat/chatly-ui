import { PBContainer, PBWrapper, PBOption, PBOptionTextWrapper, PBOptionImg } from './styles';
import LockSvg from './assets/LockSvg.svg';
import { useNavigate } from 'react-router-dom';
import { ROUTE__PRVIACY_POLICY } from '../../router/constants';
import ProfileTopBar from './components/ProfileTopBar';

const ProfileBar = () => {
  const navigate = useNavigate();

  return (
    <PBContainer>
      <ProfileTopBar />
      <PBWrapper>
        <PBOption onClick={() => navigate(ROUTE__PRVIACY_POLICY)}>
          <PBOptionImg src={LockSvg} />
          <PBOptionTextWrapper>Privacy & Security</PBOptionTextWrapper>
        </PBOption>

        <PBOption>
          <PBOptionImg src={LockSvg} />
          <PBOptionTextWrapper>Privacy & Security</PBOptionTextWrapper>
        </PBOption>

        <PBOption>
          <PBOptionImg src={LockSvg} />
          <PBOptionTextWrapper>Privacy & Security</PBOptionTextWrapper>
        </PBOption>
      </PBWrapper>
    </PBContainer>
  );
};

export default ProfileBar;
