import './navbar.css';

function Navbar() { 
  return (
    <nav className="flex items-center justify-between bg-white px-12 py-4 border-b">
      <div className="text-3xl font-pacifico text-sky-400">
        Med<span className="font-bold">Track</span>
      </div>
      <ul className="flex gap-10 text-lg navbar-links">
        <li>Acceuil</li>
        <li>Fonctionnalités</li>
        <li>Avantages</li>
        <li>Témoignages</li>
        <li>Tarifs</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-4">
        <button className="navbar-btn">Se connecter</button>
        <button className="navbar-btn navbar-btn-filled">Essai gratuit</button>
      </div>
    </nav>
  );
}
export default Navbar;