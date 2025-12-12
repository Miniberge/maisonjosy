import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "#accueil", label: "Accueil" },
    { to: "#concept", label: "Concept" },
    { to: "#maisons", label: "Nos Maisons" },
    { to: "#tarifs", label: "Tarifs" },
    { to: "#investisseurs", label: "Copropriétaires" },
    { to: "#faq", label: "FAQ" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-beige shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#accueil")}
            className="flex items-center space-x-2 group"
          >
            <div className="text-3xl font-display font-bold text-primary group-hover:text-light-teal transition-colors">
              Josy
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => scrollToSection(link.to)}
                className="text-base font-medium transition-colors relative group text-foreground/80 hover:text-primary"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button size="lg" className="shadow-md" onClick={() => scrollToSection("#contact")}>
              Nous contacter
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.to}
                  onClick={() => scrollToSection(link.to)}
                  className="text-lg font-medium py-2 transition-colors text-foreground/80 hover:text-primary text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button size="lg" className="w-full mt-4" onClick={() => scrollToSection("#contact")}>
                Nous contacter
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;