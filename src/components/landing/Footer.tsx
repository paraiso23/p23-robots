
import { BrainCircuit, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <BrainCircuit className="text-blue-400 h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold text-gradient">Paraiso23</span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-white/60">
            <span className="text-sm">
              &copy; {new Date().getFullYear()} Paraiso23. All rights reserved.
            </span>
            <Heart className="h-4 w-4 text-red-400 animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
