import styled from '@emotion/styled';
import { theme } from 'styles/theme';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;

  @media screen and (max-width: 767.9px) {
    flex-direction: column;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: ${theme.fontSizes.medium};
  text-decoration: none;
  color: white;
  font-weight: 500;

  &:hover {
    background-color: ${theme.colors.royalBlue};
  }

  &.active {
    text-decoration: underline;
  }
`;
