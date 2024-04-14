import styled from 'styled-components';
import LoginBg from './assets/login-bg.png';

export const LLWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: red;
  background: url(${LoginBg});
`;

export const LLContainer = styled.div`
  display: flex;
  background-color: #192030;
  border-radius: 8px;
  padding: 60px;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(117, 117, 117, 0.2);
`;
