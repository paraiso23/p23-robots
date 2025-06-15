
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { BrainCircuit, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ["Features", "Use Cases", "Testimonials", "Contact"];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <BrainCircuit className="text-primary h-8 w-8" />
            <span className="text-2xl font-bold">Paraiso23</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-primary transition-colors">{link}</a>)}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Button>Request Demo</Button>
            <Button variant="outline" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background/90 backdrop-blur-lg pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map(link => <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} onClick={() => setIsOpen(false)} className="text-lg text-muted-foreground hover:text-primary transition-colors">{link}</a>)}
            <Button>Request Demo</Button>
            <Button variant="outline" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
