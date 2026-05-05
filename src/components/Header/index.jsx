import logo from "../../assets/img/h2s-logo.png";

function Header() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "How to participate?", href: "#how-to-participate" },
    { name: "Challenges", href: "#challenges" },
    { name: "Schedules", href: "#schedules" },
    { name: "Rewards", href: "#rewards" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-white rounded-full flex items-center px-4 md:px-6 py-2 gap-4 md:gap-8 shadow-2xl max-w-full overflow-hidden">
        {/* Logo */}
        <div className="flex items-center justify-center h-8 md:h-10 px-2 shrink-0">
          <img
            src={logo}
            alt="H2S Logo"
            className="h-full object-contain"
          />
        </div>

        {/* Navigation Links - Hidden on smaller screens */}
        <ul className="hidden lg:flex gap-4 md:gap-6 text-xs md:text-sm font-bold">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-black/70 hover:text-purple-600 transition-colors duration-200 whitespace-nowrap"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Sign In Button */}
        <a
          href="#"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 shadow-lg shadow-purple-600/30 shrink-0"
        >
          Sign In
        </a>
      </nav>
    </header>
  );
}

export default Header;
