interface ThemeToggleProps {
  onToggle: () => void;
  currentTheme: string;
}

const ThemeToggle = ({ onToggle, currentTheme }: ThemeToggleProps) => {
  const isDark = currentTheme === 'dark';

  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-full text-foreground bg-card hover:bg-card/80 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M3 12h2.25m-.386-6.364l1.591 1.591M12 12a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
        </svg>
      ) : (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 12a9.75 9.75 0 0018.752 3.002z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;