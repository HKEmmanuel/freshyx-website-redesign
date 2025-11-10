
import { Facebook,  Linkedin, Instagram } from 'lucide-react';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {

  const links = {
    Jeune: [
      { name: 'Membres', href: '#' },
      { name: 'Talents', href: '#' },
      { name: 'Volontaires', href: '#' },
    ],
    Organisation: [
      { name: 'Devenez Partenaires', href: '#' },
      { name: 'Devenez Talents', href: '#' },
      { name: 'Devenez Volontaires', href: '#' },
    ],
    Ressources: [
      { name: 'Aide', href: '#' },
      { name: 'Actualites', href: '#' },
      { name: 'Empreinte carbone', href: '#' },
    ],
    'Notre Organisation': [
      { name: 'A propos de nous', href: '#' },
      { name: 'Devenir membre', href: '#' },
      { name: 'Recherche d\'opportunités', href: '#' },
    ],
  };

  return (
    <footer className="w-full bg-[hsl(var(--background))] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="flex flex-col space-y-4">
              <h4 className="text-lg font-bold text-[hsl(var(--title))] mb-2">
                {title}
              </h4>
             
              {items.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-base text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-12 mb-8 pt-4">
          
          <p className="text-3xl font-extrabold text-[hsl(var(--title))] mb-6 md:mb-0">
            FRESHYX
          </p>

          <div className="text-left md:text-right">
            <p className="text-sm font-semibold text-[hsl(var(--title))] mb-2">
              Nos Reseaux-sociaux
            </p>
            <div className="flex space-x-4">
              
              <a href="#" aria-label="Facebook" className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="TikTok" className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors">
                <FaTiktok className="h-5 w-5" />
              </a>
              <a href="#" aria-label="WhatsApp" className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors">
                <FaWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-[hsl(var(--border))] mb-8" />

        <div className="text-center text-sm text-[hsl(var(--muted-foreground))] space-y-1">
          <p>©FRESHYX 2025</p>
          <p>Nous sommes une Organisation a but non lucratif</p>
        </div>
      </div>
    </footer>
  );
}