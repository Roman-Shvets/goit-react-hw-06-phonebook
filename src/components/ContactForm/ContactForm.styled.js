import styled from 'styled-components';
import {
  Form as AddContactForm,
  Field,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const Form = styled(AddContactForm)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  max-width: 332px;
  border: 1px solid black;
  padding: 20px 30px 20px 10px;  
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  font-size: 20px;
  width: 100%;
 `;

export const ButtonSubmit = styled.button`
  font-size: 12px;
  font-weight: 500;
  margin-top: 10px;
  padding: 3px;
  border-radius: 5px;
  background-color: rgb(59, 145, 199);
  border-color:transparent;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor:pointer;

  :active{
  box-shadow: none;
  }
`;

export const Input = styled(Field)`
  padding-left: 5px;
  height: 30px;
  background-color: transparent;
  border: 1px solid gray;
  outline: none;  
  `;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: red;
  font-size: 12px;
`;