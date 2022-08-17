import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const ContactItem = styled.li`
  width: 290px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.fontSizes.medium};
  font-weight: 500;

  :not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const DeleteButton = styled.button`
  width: 40px;
  height: 20px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: lowercase;
  border: 2px solid ${theme.colors.dark};
  transition: border border-color ${theme.animation.cubicBezierV2};

  // :hover {
  //   color: ${theme.colors.white};

  //   background-color: ${theme.colors.darkOpange};
  //   border: 2px solid ${theme.colors.darkOpange};
  // }

  // :active {
  //   border: 2px solid ${theme.colors.darkOpange};
  // }
`;
