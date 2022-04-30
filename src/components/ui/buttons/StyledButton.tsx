import styled from 'styled-components'

interface StyledButtonProps {
  readonly color?: 'primary' | 'secondary'
}

const StyledButton = styled.button<StyledButtonProps>`
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0;
  text-align: center;

  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 8px 32px;
  color: ${({ color, theme }) => (color === 'secondary' ? theme.colors.primary.main : 'white')};
  background-color: ${({ color, theme }) =>
    color === 'secondary' ? theme.colors.secondary.main : theme.colors.primary.main};
  transition-duration: 0.3s;
  :hover {
    transition-duration: 0.3s;
    background-color: ${({ color, theme }) =>
      color === 'secondary' ? theme.colors.secondary.dark : theme.colors.primary.dark};
  }
`
export default StyledButton
