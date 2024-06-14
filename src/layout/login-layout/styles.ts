import styled from 'styled-components';
import LoginBg from './assets/login-bg.png';

export const LLWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${LoginBg});

  @media (max-width: 600px) {
    padding: 0 40px 0 40px;
  }

  @media (max-width: 380px) {
    padding: 0 8px 0 8px;
  }
`;

export const LLContainer = styled.div`
  display: flex;
  background-color: #192030;
  border-radius: 8px;
  padding: 60px;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(117, 117, 117, 0.2);

  @media (max-width: 600px) {
    padding: 40px;
    width: 100%;
  }
`;
