
# Motion Art Clone

This template provides a minimal setup to get React working in Vite.


## Installation

Installing Vite+React

```bash
  npm create vite@latest
  npm install
```

Installing Tailwind

```bash
  npm install -D tailwindcss
  npx tailwindcss init
```

Configure your `tailwind.config.js`
```bash
  /** @type {import('tailwindcss').Config} */
  module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the Tailwind directives to your CSS `src/input.css`
```bash
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```

    
## Deployment

To deploy this project run

```bash
  npm run dev
```

