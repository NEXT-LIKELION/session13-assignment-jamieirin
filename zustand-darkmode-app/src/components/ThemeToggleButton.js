import { useThemeStore } from '../store/themeStore'

export function ThemeToggleButton() {
  const toggleTheme = useThemeStore((state) => state.toggleTheme)
  const theme = useThemeStore((state) => state.theme)

  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  )
}
