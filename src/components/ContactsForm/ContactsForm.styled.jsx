import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  // border: 2px solid ${theme.colors.dark};
  box-shadow: ${theme.shadows.regular};
  margin-top: 72px;
  margin-bottom: 24px;

  border-radius: 12px;
`;

export const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 16px 0;
  background-color: lightblue;
  border-radius: 12px;

  box-shadow: ${theme.shadows.large};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 12px;
`;

export const Title = styled.span`
  font-size: ${theme.fontSizes.large};
  font-weight: 500;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 240px;
  height: 24px;
  border-radius: 4px;
  border: 2px solid ${theme.colors.dark};
  transition: border-color ${theme.animation.cubicBezierV1};

  :focus {
    border: 2px solid ${theme.colors.accent};
    outline: none;
  }
`;

export const Button = styled.button`
  width: 136px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.accent};
  color: ${theme.colors.dark};
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 4px;
  border: 2px solid ${theme.colors.dark};
  transition: ${theme.animation.cubicBezierV2};

  :hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.darkOpange};
  }
  :active {
    border: none;
  }
`;
