import React, { FC, ReactNode } from 'react'
import StyledButton from 'components/ui/buttons/StyledButton'

interface IModalStyledWindowProps {
  title: string
  btnTitle?: string
  onBtnClick?: () => void
  children: ReactNode
}

const ModalStyledWindow: FC<IModalStyledWindowProps> = ({
  title,
  btnTitle,
  onBtnClick,
  children,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        style={{
          fontWeight: 500,
          fontSize: '28px',
          lineHeight: '33px',
          textAlign: 'center',
          marginTop: '36px',
        }}
      >
        {title}
      </div>
      <div
        style={{
          marginTop: '20px',
          width: '232px',
          height: '120px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginBottom: '110px',
        }}
      >
        {children}
      </div>
      {btnTitle ? <StyledButton onClick={onBtnClick}>{btnTitle}</StyledButton> : null}
    </div>
  )
}

export default ModalStyledWindow
