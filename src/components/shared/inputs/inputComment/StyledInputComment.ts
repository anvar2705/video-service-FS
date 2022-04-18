import styled from 'styled-components'

const StyledInputComment = styled.textarea`
  width: 100%;
  border-radius: 8px;
  background-color: rgba(229, 38, 30, 0.2);
  border: none;
  resize: none;
  font-family: 'Rubik', sans-serif;
  padding: 16px;
  box-sizing: border-box;
  ::placeholder {
    font-weight: 400;
    color: #e5261e;
  }
  :focus {
    outline: none;
  }
`

export default StyledInputComment
