import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Header = styled.header`
  position: ${p => p.headerPosition};
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  background-color: ${theme.colors.accent};
  box-shadow: ${theme.shadows.small};
`;

export const HeaderContainer = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 12px 15px;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1024px) {
    width: 1024px;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: stretch;
  justify-content: space-between;
`;
