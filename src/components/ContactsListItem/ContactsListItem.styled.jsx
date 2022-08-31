import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  font-size: ${theme.fontSizes.medium};
  font-weight: 500;
  color: ${theme.colors.white};
  background-color: ${theme.colors.lightblue};
  border-radius: 4px;
  box-shadow: ${theme.shadows.regular};

  :not(:last-child) {
    margin-bottom: 16px;
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
  height: 24px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  align-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: ${theme.colors.gray};
  transition: background-color ${theme.animation.cubicBezierV2};

  :hover {
    background-color: ${theme.colors.darkOpange};
  }
`;

export const EditButton = styled.button`
  width: 40px;
  height: 24px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  align-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: ${theme.colors.gray};
  transition: background-color ${theme.animation.cubicBezierV2};

  :hover {
    background-color: ${theme.colors.darkOpange};
  }
`;
