
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import LangSwitcher from '@/components/common/LangSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const mainNavItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.formations'), path: '/formations' },
    { name: t('nav.events'), path: '/events' },
    { name: t('nav.news'), path: '/news' },
    { name: t('nav.resources'), path: '/resources' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <header className="sticky top-0 w-full z-50">
      {/* Barre supérieure avec info contact et login */}
      <div className="bg-crec-darkblue text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="hidden md:flex gap-6">
            <span>contact@crec-education.org</span>
            <span>+33 (0)1 23 45 67 89</span>
          </div>
          <div className="flex gap-4 ml-auto">
            <Link to="/student" className="hover:text-crec-lightgold transition">
              {t('common.login')} Étudiant
            </Link>
            <Link to="/teacher" className="hover:text-crec-lightgold transition">
              {t('common.login')} Enseignant
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <div className="bg-white shadow-md py-3 px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="font-serif text-xl md:text-2xl font-bold text-crec-darkblue">
              CREC
              <span className="text-crec-gold">.</span>
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-3 py-2 text-crec-darkblue hover:text-crec-gold transition font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild variant="default" className="ml-2 bg-crec-gold hover:bg-crec-lightgold text-white">
              <Link to="/donate">{t('nav.donate')}</Link>
            </Button>
          </nav>

          {/* Boutons utilitaires */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleSearch}
              className="p-2 text-crec-darkblue hover:text-crec-gold"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <LangSwitcher />
            <button
              className="lg:hidden p-2 text-crec-darkblue"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Barre de recherche */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 z-50">
            <div className="container mx-auto">
              <div className="flex items-center border border-gray-300 rounded-md">
                <input
                  type="text"
                  placeholder={t('common.search') + "..."}
                  className="w-full p-2 focus:outline-none"
                  autoFocus
                />
                <button className="p-2 bg-crec-gold text-white rounded-r-md">
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="container mx-auto py-4">
            <nav className="flex flex-col">
              {mainNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-4 py-3 border-b border-gray-100 text-crec-darkblue hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/donate"
                className="px-4 py-3 bg-crec-gold text-white mt-2 text-center font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.donate')}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
