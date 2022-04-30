import styled from 'styled-components'

const StyledInput = styled.input`
  height: 25px;
  width: 100%;
  border: none;
  border-bottom: 1px #333333 solid;

  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0;
  text-align: left;

  ::placeholder {
    font-weight: 400;
  }
  :focus {
    outline: none;
  }
`

export default StyledInput
