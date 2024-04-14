import { Outlet } from 'react-router-dom';
import { LLContainer, LLWrapper } from './styles';

const Layout = () => (
  <LLWrapper>
    <LLContainer>
      <Outlet />
    </LLContainer>
  </LLWrapper>
);

export default Layout;
