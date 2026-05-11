import { Link } from "@tanstack/react-router";
import logo from "@/assets/east-pipes-logo.png";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-wide py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="East Pipes" className="h-10 w-auto brightness-0 invert mb-6" />
          <p className="max-w-md text-white/70 leading-relaxed">
            Engineering strength. Building tomorrow. World-class steel pipe solutions
            powering industries across 50+ countries.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-white/50 mb-4">Explore</h4>
          <ul className="space-y-3">
            <li><Link to="/about" className="hover:text-brand">About</Link></li>
            <li><Link to="/products" className="hover:text-brand">Products</Link></li>
            <li><Link to="/contact" className="hover:text-brand">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-white/50 mb-4">Headquarters</h4>
          <p className="text-white/70 leading-relaxed">
            Second Industrial City<br/>
            Dammam, Kingdom of Saudi Arabia
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col md:flex-row justify-between text-xs text-white/50">
          <span>© {new Date().getFullYear()} East Pipes Integrated Co. All rights reserved.</span>
          <span>أنابيب الشرق</span>
        </div>
      </div>
    </footer>
  );
}
