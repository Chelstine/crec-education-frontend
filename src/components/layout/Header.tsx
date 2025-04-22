
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import LangSwitcher from '@/components/common/LangSwitcher';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const submenuItems = {
    about: [
      { name: "Mission", path: "/about/mission" },
      { name: "Équipe", path: "/about/team" },
      { name: "Partenaires", path: "/about/partners" },
    ],
    formations: [
      { name: "Programmes", path: "/formations/programs" },
      { name: "Université", path: "/formations/university" },
      { name: "Citoyenneté", path: "/formations/citizenship" },
      { name: "Admission", path: "/formations/admission" },
    ],
    events: [
      { name: "Calendrier", path: "/events/calendar" },
      { name: "Conférences", path: "/events" },
    ],
    news: [
      { name: "Vie de Campus", path: "/news/campus-life" },
      { name: "Témoignages", path: "/news/testimonials" },
    ],
    resources: [
      { name: "Publications", path: "/resources" },
      { name: "Bibliothèque", path: "/resources/library" },
    ],
  };

  return (
    <header className="sticky top-0 w-full z-50">
      <div className="bg-white shadow-md py-3 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/13786322-1618-43a4-a6ff-b01832fcf661.png" 
              alt="CREC Logo" 
              className="h-16 w-56 object-contain"
            />
          </Link>

          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="px-3 py-2 text-crec-darkblue hover:text-crec-gold transition font-medium">
                    {t('nav.home')}
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-crec-darkblue hover:text-crec-gold bg-transparent hover:bg-transparent">
                    {t('nav.about')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2 bg-white shadow-lg border rounded-md">
                      {submenuItems.about.map((item) => (
                        <li key={item.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.path}
                              className="block select-none rounded-md p-2 hover:bg-crec-offwhite hover:text-crec-gold"
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-crec-darkblue hover:text-crec-gold bg-transparent hover:bg-transparent">
                    {t('nav.formations')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[220px] gap-1 p-2 bg-white shadow-lg border rounded-md">
                      {submenuItems.formations.map((item) => (
                        <li key={item.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.path}
                              className="block select-none rounded-md p-2 hover:bg-crec-offwhite hover:text-crec-gold"
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-crec-darkblue hover:text-crec-gold bg-transparent hover:bg-transparent">
                    {t('nav.events')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2 bg-white shadow-lg border rounded-md">
                      {submenuItems.events.map((item) => (
                        <li key={item.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.path}
                              className="block select-none rounded-md p-2 hover:bg-crec-offwhite hover:text-crec-gold"
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-crec-darkblue hover:text-crec-gold bg-transparent hover:bg-transparent">
                    {t('nav.news')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2 bg-white shadow-lg border rounded-md">
                      {submenuItems.news.map((item) => (
                        <li key={item.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.path}
                              className="block select-none rounded-md p-2 hover:bg-crec-offwhite hover:text-crec-gold"
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-crec-darkblue hover:text-crec-gold bg-transparent hover:bg-transparent">
                    {t('nav.resources')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2 bg-white shadow-lg border rounded-md">
                      {submenuItems.resources.map((item) => (
                        <li key={item.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.path}
                              className="block select-none rounded-md p-2 hover:bg-crec-offwhite hover:text-crec-gold"
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className="px-3 py-2 text-crec-darkblue hover:text-crec-gold transition font-medium">
                    {t('nav.contact')}
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button asChild variant="default" className="ml-2 bg-crec-gold hover:bg-crec-lightgold text-white">
                    <Link to="/donate">{t('nav.donate')}</Link>
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

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

      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="container mx-auto py-4">
            <nav className="flex flex-col">
              <Link
                to="/"
                className="px-4 py-3 border-b border-gray-100 text-crec-darkblue hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              
              {Object.entries({ 
                [t('nav.about')]: submenuItems.about,
                [t('nav.formations')]: submenuItems.formations,
                [t('nav.events')]: submenuItems.events,
                [t('nav.news')]: submenuItems.news,
                [t('nav.resources')]: submenuItems.resources
              }).map(([title, items], idx) => (
                <div key={idx} className="border-b border-gray-100">
                  <div className="px-4 py-3 flex justify-between items-center text-crec-darkblue">
                    {title}
                    <ChevronDown size={16} />
                  </div>
                  <div className="pl-8 pb-2">
                    {items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block py-2 text-crec-blue hover:text-crec-gold"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              <Link
                to="/contact"
                className="px-4 py-3 border-b border-gray-100 text-crec-darkblue hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              
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
