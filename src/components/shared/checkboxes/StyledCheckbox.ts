import styled from 'styled-components'

const StyledCheckbox = styled.input.attrs((props) => ({
  type: 'checkbox',
}))`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid #333333;
`

export default StyledCheckbox
