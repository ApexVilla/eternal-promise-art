import logo from "@/assets/logo-berit-olam.jpg";

const Footer = () => (
  <footer className="py-12 section-darker border-t border-border">
    <div className="container mx-auto px-4 text-center">
      <img src={logo} alt="Berit Olam" className="h-10 mx-auto mb-4 object-contain" />
      <p className="text-muted-foreground font-body text-sm mb-2">Promesa Eterna — Elegancia · Distinción · Arte con Amor</p>
      <p className="text-muted-foreground/50 font-body text-xs">© {new Date().getFullYear()} Berit Olam. Todos los derechos reservados.</p>
    </div>
  </footer>
);

export default Footer;
