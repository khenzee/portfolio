/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',

        secondary: 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',

        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',

        destructive: 'hsl(var(--destructive))',
        'destructive-foreground': 'hsl(var(--destructive-foreground))',

        success: 'hsl(var(--success))',
        'success-foreground': 'hsl(var(--success-foreground))',

        warning: 'hsl(var(--warning))',
        'warning-foreground': 'hsl(var(--warning-foreground))',

        info: 'hsl(var(--info))',
        'info-foreground': 'hsl(var(--info-foreground))',

        ring: 'hsl(var(--ring))',
      },
    },
  },
  plugins: [],
}

