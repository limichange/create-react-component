import { tv } from 'tailwind-variants'
import { useMemo } from 'react'
  
export const ButtonGroup2Variants = tv({
  slots: {
    base: []
  },
  variants: {
    size: {
    }
  }
})

export type UseButtonGroup2StyleProps = Parameters<typeof ButtonGroup2Variants>[0]

export function useButtonGroup2Style(props: UseButtonGroup2StyleProps) {
  return useMemo(() => {
    const slots = ButtonGroup2Variants(props)

    return {
      baseStyleProps: { className: slots.base() },
    }
  }, [props])
}
