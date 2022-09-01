import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Title = styled.h2`
  font-size: 48px;
  color: ${theme.colors.dark};
`;

export const Message = styled.h2``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 12px 0;
`;

export const Button = styled.button`
  position: fixed;
  bottom: 32px;
  right: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.accent};
  color: ${theme.colors.white};
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 50%;
  transition: background-color ${theme.animation.cubicBezierV2}
  
  :hover {
    background-color: ${theme.colors.darkOpange};
  }

  @media screen and (min-width: 1024px) {
    bottom: 56px;
    right: 360px;
  }

`;
