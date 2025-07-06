function Header() {
  const navItems = [
    "About",
    "How to participate?",
    "Challenges",
    "Schedules",
    "Rewards",
    "FAQs",
  ];

  return (
    <header className="w-full flex justify-center py-6 ">

      <nav className="bg-white rounded-full flex items-center px-8 py-2 gap-10 shadow-md">

        {/* Logo */}
        <div className="flex items-center justify-center w-16 h-16">

          <img
            src="https://hack2skill.com/brandguidelines/assets/images/H2S_Gradient_Logo.svg"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-8 text-sm font-medium">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="hover:text-purple-500 transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Sign In Button */}
        <a
          href="#"
          className="ml-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors"
        >
          Sign In
        </a>

      </nav>
    </header>
  );
}

export default Header;
