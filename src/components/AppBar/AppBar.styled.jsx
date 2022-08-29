import styled from '@emotion/styled';
import { theme } from 'styles/theme';
import { NavLink } from 'react-router-dom';

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
//   width: 320px;
//   margin: 0 auto;
//   padding: 0 15px;
// `;

export const Section = styled.section`
  padding: 24px 0;
`;

export const Header = styled.header`
  display: flex;
  width: auto;
  background-color: ${theme.colors.accent};
  box-shadow: ${theme.shadows.medium};
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

  // @media screen and (min-width: 768px) {
  //   align-items: center;
  // }
`;

export const MainTitle = styled.h2`
  font-size: 36px;
  color: ${theme.colors.white};
  margin-bottom: 0;
`;

export const SectionTitle = styled.h2`
  width: 100%;
  font-size: 24px;
  color: ${theme.colors.white};
  text-align: center;
  padding: 8px 0;
  background-color: ${theme.colors.darkbackground};
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
