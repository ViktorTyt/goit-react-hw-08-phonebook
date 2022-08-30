import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Title = styled.h2`
  font-size: 48px;
  color: ${theme.colors.dark};
`;

export const Message = styled.p`
  font-size: ${theme.fontSizes.medium};
  font-weight: 500;
  margin-bottom: 12px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 12px 0;
`;

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
