import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: ${theme.fontSizes.medium};
  font-weight: 500;
  background-color: lightblue;
  border-radius: 4px;
  box-shadow: ${theme.shadows.regular};

  :not(:last-child) {
    margin-bottom: 12px;
  }
`;
export const ContactItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;
export const ItemName = styled.span``;
export const ItemNumber = styled.span``;

export const DeleteButton = styled.button`
  width: 40px;
  height: auto;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  align-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
  // text-transform: lowercase;
  // border: 2px solid ${theme.colors.dark};
  transition: background-color ${theme.animation.cubicBezierV2};

  :hover {
    // color: ${theme.colors.white};

    background-color: ${theme.colors.darkOpange};
    // border: 2px solid ${theme.colors.darkOpange};
  }

  // :active {
  //   border: 2px solid ${theme.colors.darkOpange};
  // }
`;
