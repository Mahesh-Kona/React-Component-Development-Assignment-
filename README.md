# Uzence Design Studio Frontend Dev

React + TypeScript + TailwindCSS + Storybook project for UI component development.

---

## 🚀 Tech Stack
- **React** – UI library  
- **TypeScript** – type safety  
- **TailwindCSS** – utility-first styling  
- **Storybook** – component documentation & preview  

---

##folder structure

src/
 ├── components/
 │    ├── InputField/
 │    │    ├── InputField.tsx
 │    │    ├── InputField.stories.tsx
 │    │    └── index.ts
 │    ├── DataTable/
 │    │    ├── DataTable.tsx
 │    │    ├── DataTable.stories.tsx
 │    │    └── index.ts
 └── App.tsx


## 📂 Components

### 1. InputField
A flexible and reusable input component with:
- Label, placeholder, helper text, error message  
- Variants: `filled`, `outlined`, `ghost`  
- Sizes: `sm`, `md`, `lg`  
- States: default, disabled, invalid  
- Accessibility features:  
  - `label` linked to input via `htmlFor`  
  - `aria-invalid`, `aria-describedby` for error/helper text  
  - Keyboard/tab navigation supported  

### 2. DataTable
A responsive, accessible data table with:
- Tabular data display  
- Column sorting (click or keyboard `Enter`/`Space`)  
- Row selection with checkboxes  
- Loading & empty states  
- Accessibility features:  
  - Semantic roles: `role="table"`, `role="row"`, `role="cell"`, `role="columnheader`  
  - `aria-sort` for sortable columns  
  - `aria-label` for row selection checkboxes  

---

## ▶️ Setup Instructions

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd Uzence_Design_Studio_Frontend_dev
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the React development server**
```bash
npm start
```
Runs the app at [http://localhost:3000](http://localhost:3000).

4. **Run Storybook**
```bash
npm run storybook
```
Opens Storybook at [http://localhost:6006](http://localhost:6006).

5. **Build for production**
```bash
npm run build
```
Outputs optimized React build in the `build/` folder.

6. **Build Storybook (for deployment)**
```bash
npm run build-storybook
```
Outputs static Storybook site in the `storybook-static/` folder.
