/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      bg: 'var(--tg-theme-bg-color)',
      text: 'var(--tg-theme-text-color)',
      hint: 'var(--tg-theme-hint-color)',
      link: 'var(--tg-theme-link-color)',
      button: 'var(--tg-theme-button-color)',
      button_text: 'var(--tg-theme-button-text-color)',
      secondary_bg: 'var(--tg-theme-secondary-bg-color)'
    }
  },
  plugins: [],
}

