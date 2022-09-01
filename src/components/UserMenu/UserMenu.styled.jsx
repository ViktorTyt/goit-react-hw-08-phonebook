import styled from '@emotion/styled';
import { theme } from 'styles/theme';
// import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  @media screen and (max-width: 767.9px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.span`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.medium};
  font-weight: 500;
  margin-left: 12px;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.white};
  padding: 4px;
  margin-left: 12px;
  border-radius: 4px;
  transition: ${theme.animation.cubicBezierV2};

  &:hover {
    background-color: whitesmoke;
  }
`;
