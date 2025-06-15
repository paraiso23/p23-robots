
import { BrainCircuit } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <BrainCircuit className="text-muted-foreground h-6 w-6" />
            <span className="text-lg font-semibold text-muted-foreground">Paraiso23</span>
          </div>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">&copy; {new Date().getFullYear()} Paraiso23. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
