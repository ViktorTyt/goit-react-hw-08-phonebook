import styled from '@emotion/styled';
import { theme } from '../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 320px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Section = styled.section``;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  heigth: 36px;
  background-color: ${theme.colors.accent};
  box-shadow: ${theme.shadows.regular};
`;

export const MainTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 0;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
`;
