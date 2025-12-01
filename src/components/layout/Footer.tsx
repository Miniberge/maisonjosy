import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* À propos */}
          <div>
            <h3 className="text-2xl font-display font-semibold mb-4">Josy</h3>
            <p className="text-primary-foreground/80 mb-4">
              La colocation senior copropriétaire. Retrouvez une vie sociale riche tout en
              devenant propriétaire.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/concept"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Notre Concept
                </Link>
              </li>
              <li>
                <Link
                  to="/maisons"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Nos Maisons
                </Link>
              </li>
              <li>
                <Link
                  to="/tarifs"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Tarifs
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Informations</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/a-propos"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">04 XX XX XX XX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <a
                  href="mailto:contact@josy.fr"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  contact@josy.fr
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">Lyon, France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Josy. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                to="/mentions-legales"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                to="/cgu"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                CGU
              </Link>
              <Link
                to="/confidentialite"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
