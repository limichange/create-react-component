import React from 'react'
import { useButtonGroup2 } from './useButtonGroup2'
import { useButtonGroup2Style } from './useButtonGroup2Style'

export type ButtonGroup2Props = UseButtonGroup2StyleProps &
  UseButtonGroup2Props & {
    children?: ReactNode
  }

export const ButtonGroup2: FC<ButtonGroup2Props> = (props) => {
  const { BaseComponent, baseProps } = useButtonGroup2()
  const { baseStyleProps } = useButtonGroup2Style()

  return <BaseComponent {...baseStyleProps} {...baseProps}></BaseComponent>
}