import styled from 'styled-components';

export const ListContacts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
  padding:0;
  `;

export const ItemsContact = styled.li`
  display: flex;
  gap:15px;
`;

export const Contact = styled.p`
  font-size: 20px;
  padding: 0 10px;
  margin: 0;
`;

export const DeleteBtn = styled.button`
  font-size: 15px;
  padding: 0px 8px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #5472ea47;
  height: 30px;
  cursor:pointer;
 `;