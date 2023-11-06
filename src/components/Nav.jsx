import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="padding-x absolute py-8 z-10 w-full">
      <nav className="flex items-center justify-between max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href=""
              className="font-montserrat leading-normal text-lg text-black font-medium"
            >
              Sign in/Explore Now
            </a>
          </li>
        </ul>
        <div className="hidden max-lg:block">
            <img src={hamburger} alt="hamburger" width={25} height={25}/>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
