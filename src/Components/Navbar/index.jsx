import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">
            BOMYIYAS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mates"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Mates
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/termos"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Termos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bombillas"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Bombillas
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/accesorios"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Accesorios
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-black/60">contacto@prueba.com.ar</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Ordenes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Mi Cuenta
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li>🛒0</li>
      </ul>
    </nav>
  );
};

export default Navbar;
