import { ButtonGroup2 } from './ButtonGroup2'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'ButtonGroup2',
  component: ButtonGroup2,
  tags: ['autodocs'],
  argTypes: {}
} as Meta<typeof ButtonGroup2>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
