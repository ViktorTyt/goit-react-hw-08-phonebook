import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  background-color: lightblue;
  border-radius: 12px;
  box-shadow: ${theme.shadows.regular};
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Title = styled.span`
  font-size: ${theme.fontSizes.medium};
  font-weight: 500;
  margin-bottom: 12px;
`;

export const FilterInput = styled.input`
  width: 240px;
  height: 24px;
  margin-bottom: 16px;
  border-radius: 4px;
  border: 2px solid ${theme.colors.dark};
  transition: border-color ${theme.animation.cubicBezierV1};

  :focus {
    border: 2px solid ${theme.colors.accent};
    outline: none;
  }
`;
