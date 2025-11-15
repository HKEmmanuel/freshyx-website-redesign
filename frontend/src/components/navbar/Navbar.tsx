import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';
import { Search, Sun, Moon, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'À propos', href: '/about' },
  { name: 'Partenaires', href: '/partners' },
];

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  
  const logoStyle = "text-2xl font-bold text-[hsl(var(--foreground))]"; 

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between p-4 gap-4">
        
        <Link to="/" className={logoStyle}>FRESHYX</Link>

        <div className="hidden lg:flex flex-grow max-w-lg relative mr-6">
          <input
            type="text"
            placeholder="Rechercher une d'opportunité"
            className="w-full py-2 px-4 pl-4 pr-10 rounded-md bg-[hsl(var(--card))] focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-[hsl(var(--muted))] text-sm text-[hsl(var(--foreground))] text-foreground/80 transition-colors"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        </div>

        <nav className="flex items-center space-x-4">
          
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="hidden lg:inline-flex text-foreground hover:text-primary transition-colors font-medium">
              {link.name}
            </Link>
          ))}

          <button className="hidden sm:inline-flex items-center border border-foreground/30 text-foreground hover:bg-foreground/5 bg-background rounded-md px-3 py-1.5 text-xs font-normal">
            GB ENG
            <ChevronDown className="w-3 h-3 ml-1" />
          </button>

          <button onClick={toggleTheme} className="flex items-center justify-center !bg-primary hover:!bg-primary/90 p-3 rounded-full">
             {theme === 'light' ? (
                <Moon className="w-5 h-5 text-primary-foreground" />
              ) : (
                <Sun className="w-5 h-5 text-primary-foreground" />
              )}
          </button>
          
          <Link to="/adhesion" 
            className="inline-flex items-center justify-center bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-primary/90 shadow-md font-semibold py-2.5 px-6 rounded-md">
            S'inscrire
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;