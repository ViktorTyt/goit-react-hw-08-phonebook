import styled from '@emotion/styled';
import { theme } from 'styles/theme';

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
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.medium};
  font-weight: 500;
  text-transform: uppercase;
  border: 2px solid transparent;
  padding: 4px;
  margin-left: 12px;
  border-radius: 4px;
  transition: ${theme.animation.cubicBezierV2};

  &:hover {
    border: 2px solid ${theme.colors.white};
  }
`;
