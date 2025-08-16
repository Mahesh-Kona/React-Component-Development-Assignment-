import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { DataTable } from "./DataTable";

interface User {
  id: number;
  name: string;
  email: string;
}

const sampleData: User[] = [
  { id: 1, name: "Mahesh", email: "mahesh@example.com" },
  { id: 2, name: "Anita", email: "anita@example.com" },
  { id: 3, name: "Ravi", email: "ravi@example.com" },
];

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
  parameters: {
    docs: {
      description: {
        component:
          "A data table component with support for displaying tabular data, sorting by columns, row selection, and handling loading/empty states. Accessible with `role='table'` and keyboard focus.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DataTable<User>>;

export const Default: Story = {
  args: {
    data: sampleData,
    columns: [
      { key: "id", header: "ID" },
      { key: "name", header: "Name" },
      { key: "email", header: "Email" },
    ],
    selectable: true,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns: [{ key: "id", header: "ID" }],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: [{ key: "id", header: "ID" }],
  },
};
