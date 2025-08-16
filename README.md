# Uzence Design Studio Frontend Dev

React + TypeScript + TailwindCSS + Storybook project for UI component development.

---

## 🚀 Tech Stack
- **React** (UI library)
- **TypeScript** (type safety)
- **TailwindCSS** (styling)
- **Storybook** (component documentation & preview)

---

## 📂 Components

### 1. InputField
A flexible input component with:
- Label, placeholder, helper text, error message
- Variants: `filled`, `outlined`, `ghost`
- Sizes: `sm`, `md`, `lg`
- States: default, disabled, invalid
- Accessibility: 
  - `label` linked to input via `htmlFor`  
  - `aria-invalid`, `aria-describedby` for error/helper text  
  - Keyboard/tab navigation supported  

### 2. DataTable
A responsive data table with:
- Tabular data display
- Column sorting (click or keyboard `Enter`/`Space`)
- Row selection (checkboxes)
- Loading & empty states
- Accessibility:
  - Uses semantic roles: `role="table"`, `role="row"`, `role="cell"`, `role="columnheader"`
  - `aria-sort` for screen readers on sortable columns
  - `aria-label` for row selection checkboxes

---

## ▶️ Setup Instructions

Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd Uzence_Design_Studio_Frontend_dev

npm install
