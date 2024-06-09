import fs from 'fs'

export function createReactComponent(name) {
  if (!name) {
    console.error('Please provide a name')
    process.exit(1)
  }

  // transform name to camelCase
  // button => Button
  // button group => ButtonGroup
  // button-group => ButtonGroup
  const camelCaseName = name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
  const newName = camelCaseName

  // create folder
  // Button/
  const folderName = newName
  fs.mkdirSync(folderName, { recursive: true })

  // Button/index.ts
  const filePath = `${folderName}/index.ts`
  fs.writeFileSync(filePath, getIndex(newName))

  // Button/Button.ts
  const componentPath = `${folderName}/${newName}.tsx`
  fs.writeFileSync(componentPath, getComponent(newName))

  // Button/useButton.ts
  const hookPath = `${folderName}/use${newName}.ts`
  fs.writeFileSync(hookPath, getComponentHook(newName))

  // Button/useButtonStyle.ts
  const stylePath = `${folderName}/use${newName}Style.ts`
  fs.writeFileSync(stylePath, getComponentStyleHook(newName))

  // Button/Button.stories.tsx
  const storyPath = `${folderName}/${newName}.stories.tsx`
  fs.writeFileSync(storyPath, getStory(newName))
}

function getIndex(name) {
  return `import * from './${name}'`
}

function getComponentHook(name) {
  return `import React from 'react'

export function use${name}() {
  return {}
}
`
}

function getComponentStyleHook(name) {
  return `import { tv } from 'tailwind-variants'
  
export const ${name}Variants = tv({
  slots: {
    base: []
  },
  variants: {
    size: {
    }
  }
})

export type Use${name}StyleProps = Parameters<typeof ${name}Variants>[0]

export function use${name}Style(props: Use${name}StyleProps) {
  return useMemo(() => {
    const slots = ${name}Variants(props)

    return {
      baseStyleProps: { className: slots.base() },
    }
  }, [props])
}
`
}

function getComponent(name) {
  if (!name) {
    console.error('Please provide a name')
    process.exit(1)
  }

  return `import React from 'react'
import { use${name} } from './use${name}'
import { use${name}Style } from './use${name}Style'

export type ${name}Props = Use${name}StyleProps &
  Use${name}Props & {
    children?: ReactNode
  }

export const ${name}: FC<${name}Props> = (props) => {
  const { BaseComponent, baseProps } = use${name}()
  const { baseStyleProps } = use${name}Style()

  return <BaseComponent {...baseStyleProps} {...baseProps}></BaseComponent>
}`
}

function getStory(name) {
  return `import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ${name} } from './${name}'

const meta = {
  title: '${name}',
  component: ${name},
  tags: ['autodocs'],
  argTypes: {}
} as Meta<typeof ${name}>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
`
}
