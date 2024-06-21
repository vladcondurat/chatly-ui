import {
  PBContainer,
  PBWrapper,
  PBOption,
  PBOptionTextWrapper,
  PBOptionImg,
} from './styles';
import LockSvg from './assets/LockSvg.svg';
import SearchBar from '../search-bar';
import { useNavigate } from 'react-router-dom';
import { ROUTE__PROFILE } from '../../router/constants';
import ProfileTopBar from './components/ProfileTopBar';

const ProfileBar = () => {
  const navigate = useNavigate();

  return (
    <PBContainer>
      <ProfileTopBar />
      <PBWrapper>
        <SearchBar />
        <PBOption
          onClick={() => navigate(`${ROUTE__PROFILE}/privacy-and-security`)}
        >
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
