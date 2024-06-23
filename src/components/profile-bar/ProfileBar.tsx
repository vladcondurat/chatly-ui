import { useNavigate } from 'react-router-dom';

import { ROUTE__PRVIACY_POLICY } from '@app/router/constants';
import { Lock } from 'lucide-react';

import ProfileTopBar from './components/ProfileTopBar';
import { PBContainer, PBOption, PBOptionTextWrapper, PBWrapper } from './styles';

const ProfileBar = () => {
  const navigate = useNavigate();

  return (
    <PBContainer>
      <ProfileTopBar />
      <PBWrapper>
        <PBOption onClick={() => navigate(ROUTE__PRVIACY_POLICY)}>
          <Lock size={16} color="#ffffff" strokeWidth={1.5} />
          <PBOptionTextWrapper>Privacy & Security</PBOptionTextWrapper>
        </PBOption>

        <PBOption onClick={() => navigate(ROUTE__PRVIACY_POLICY)}>
          <Lock size={16} color="#ffffff" strokeWidth={1.5} />
          <PBOptionTextWrapper>Privacy & Security</PBOptionTextWrapper>
        </PBOption>

        <PBOption onClick={() => navigate(ROUTE__PRVIACY_POLICY)}>
          <Lock size={16} color="#ffffff" strokeWidth={1.5} />
          <PBOptionTextWrapper>Privacy & Security</PBOptionTextWrapper>
        </PBOption>
      </PBWrapper>
    </PBContainer>
  );
};

export default ProfileBar;
