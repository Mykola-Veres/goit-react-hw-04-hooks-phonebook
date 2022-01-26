import styled from 'styled-components';

export const ContactsListBtn = styled.button`
  background-color: white;
  border: 2px solid red;
  border-radius: 10px;
  font-size: 14px;
  margin-left: 20px;
  cursor: pointer;
`;

export const ContactsListItem = styled.li`
  border: 1px solid blue;
  border-radius: 4px;
  font-size: 14px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
  padding: 5px;
`;
