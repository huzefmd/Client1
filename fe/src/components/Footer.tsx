import { Mail, Youtube, Facebook, Instagram } from "lucide-react";
import qrCode from "@/assets/qr.jpeg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Yupoosuha</h3>
            <p className="text-muted-foreground">
              Empowering Smart Learning for Everyone. Free resources on finance, insurance, shopping, and investment.
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a href="mailto:yupoosuhafreelearning@gmail.com" className="hover:text-primary transition-colors">
                yupoosuhafreelearning@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/learning" className="hover:text-primary transition-colors">Free Learning</a></li>
              <li><a href="/shopping" className="hover:text-primary transition-colors">Shopping Discounts</a></li>
              <li><a href="/insurance" className="hover:text-primary transition-colors">Insurance</a></li>
              <li><a href="/finance" className="hover:text-primary transition-colors">Finance</a></li>
            </ul>
          </div>

          {/* WhatsApp QR Code */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Join Our WhatsApp Channel</h3>
            <div className="bg-muted p-4 rounded-lg inline-block">
              <img src={qrCode} alt="WhatsApp QR Code" className="w-40 h-40" />
            </div>
            <p className="text-sm text-muted-foreground">Scan to connect instantly!</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center space-x-6 mt-8 pt-8 border-t border-border">
          <a 
            href="https://www.youtube.com/@Yupoosuhafreelearning" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Youtube className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="h-6 w-6" />
          </a>
        </div>

        <div className="text-center mt-8 text-sm text-muted-foreground">
          © 2025 Yupoosuha. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
