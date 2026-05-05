import footerArt from "../../assets/img/footer-art.png";

const Footer = () => {
  return (
    <footer className="bg-bg-dark pt-20 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <img 
          src={footerArt} 
          alt="" 
          className="w-full max-w-[1400px] mx-auto opacity-50 select-none"
        />
        <div className="py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2026 Innovation Hackathon. All rights reserved.Created by @Prity
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
