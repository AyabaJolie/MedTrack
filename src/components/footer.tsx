import './footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGooglePlay } from 'react-icons/fa';
import { IoLogoAppleAppstore } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';


function Footer() { 
  return (     
     <footer className="border-t border-[#cfe8ff] bg-gradient-to-b from-[#f0f8ff] to-[#f0f8ff] text-black py-10 px-6 md:px-20">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Logo et description */}
        <div> 
        <div className="text-3xl font-pacifico text-sky-400">
        Med<span className="font-bold">Track</span>
          
</div>


          
          <p className="text-black-400">
            Votre compagnon de santé personnel, pour un suivi médical simplifié
            et sécurisé.
          </p>
          <div className="flex items-center gap-4 mt-6 text-lg">
            <FaFacebookF className="hover:text-black-300 cursor-pointer" />
            <RxCross2 className="hover:text-black-300 cursor-pointer" />
            <FaInstagram className="hover:text-black-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-black-300 cursor-pointer" />
          </div>
        </div>

        {/* Liens rapides */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
          <ul className="space-y-2 text-black-400">
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Fonctionnalités</a></li>
            <li><a href="#">Avantages</a></li>
            <li><a href="#">Témoignages</a></li>
            <li><a href="#">Tarifs</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Légal */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Légal</h3>
          <ul className="space-y-2 text-black-400">
            <li><a href="#">Conditions d'utilisation</a></li>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>

        {/* Téléchargement */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Télécharger</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg">
              <IoLogoAppleAppstore className="text-2xl" />
              <div>
                <p className="text-sm text-gray-300">Télécharger sur</p>
                <p className="text-white font-semibold">App Store</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg">
              <FaGooglePlay className="text-2xl" />
              <div>
                <p className="text-sm text-gray-300">Télécharger sur</p>
                <p className="text-white font-semibold">Google Play</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bas */}
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm text-gray-500 bg:blue-100">
        © 2025 MedTrack. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;