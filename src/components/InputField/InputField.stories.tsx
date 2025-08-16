import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  parameters: {
    docs: {
      description: {
        component:
          "A flexible input component with support for variants (filled, outlined, ghost), sizes (sm, md, lg), and states (default, disabled, invalid). Includes helper text and error messages for accessibility.",
      },
    },
  },
  argTypes: {
    variant: { control: "radio", options: ["filled", "outlined", "ghost"] },
    size: { control: "radio", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your name",
    helperText: "This is a helper text",
  },
};

export const Invalid: Story = {
  args: {
    label: "Email",
    placeholder: "Enter email",
    invalid: true,
    errorMessage: "Invalid email",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    placeholder: "Can't type here",
    disabled: true,
  },
};
