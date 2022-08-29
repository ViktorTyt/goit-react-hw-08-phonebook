import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Button = styled.button`
  width: 136px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.accent};
  color: ${theme.colors.white};
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 4px;
  border: 2px solid ${theme.colors.dark};
  transition: background-color ${theme.animation.cubicBezierV2}


  :hover {
    background-color: ${theme.colors.darkOpange};
  }
  :active {
    border: none;
  }
`;
