import './landingPage.css';
import VantaNetBackground from './VantaNetBackground';


function LandingPage() { 
  return (     
    <>
    <VantaNetBackground />
      <section className="flex flex-col items-center justify-center min-h-[90vh] bg-gradient-to-br from-blue-100 to-white text-center px-4">
        <div className="inline-block bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-xs font-semibold mb-4 shadow-sm">
         Données 100% protégées
        </div>
        <h1 className="font-montserrat font-black text-6xl md:text-6xl text-gray-900 mb-2 leading-tight">
          Votre suivi santé<br />
          <span className="text-sky-400">prêt en 5 minutes.</span>
        </h1>
        <div className="w-40 h-3 mx-auto mb-4">
          <svg viewBox="0 0 160 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 10 Q80 2 158 10" stroke=" #36aaf7" strokeWidth="4" fill="none" />
          </svg>
        </div>
        <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
          Simplifiez la gestion de votre santé <br />
          avec une centralisation rapide et efficace de vos informations.
        </p>
        <button className="bg-blue-400 hover:bg-[#36aaf7] transition-colors text-white font-semibold rounded-full px-8 py-3 text-lg shadow-md mb-8">
          Crée ton espace santé →
        </button>
        <div className="flex items-center justify-center gap-2">
          <img src="https://images.pexels.com/photos/1906009/pexels-photo-1906009.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-10 h-10 rounded-full border-2 border-white -ml-2 first:ml-0" />
          <img src="https://images.pexels.com/photos/6706847/pexels-photo-6706847.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-10 h-10 rounded-full border-2 border-white -ml-2" />
          <img src="https://images.pexels.com/photos/31131959/pexels-photo-31131959.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-10 h-10 rounded-full border-2 border-white -ml-2" />
          <span className="ml-4 text-gray-500 text-sm">10000 utilisateurs l’utilisent déjà</span>
        </div>
      </section>
      <section className="bg-white py-10">
        <h2 className="text-center text-gray-500 text-lg mb-8 font-semibold">Ils nous font confiance</h2>
        // ...existing code...
        <div className="flex flex-wrap justify-center gap-12">
          <div className="flex flex-col items-center">
            {/* HôpitalPlus */}
            <svg className="w-10 h-10 text-gray-400 mb-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 14h-2v-2H7v-2h3v-2H7V9h3V7h2v2h3v2h-3v2h3v2h-3v2z"/>
            </svg>
            <span className="text-gray-500 font-medium">HôpitalPlus</span>
          </div>
          <div className="flex flex-col items-center">
            {/* CardioSanté */}
            <svg className="w-10 h-10 text-gray-400 mb-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span className="text-gray-500 font-medium">CardioSanté</span>
          </div>
          <div className="flex flex-col items-center">
            {/* PharmaPro */}
            <svg className="w-10 h-10 text-gray-400 mb-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10zm-5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm1-4V7h-2v6h2z"/>
            </svg>
            <span className="text-gray-500 font-medium">PharmaPro</span>
          </div>
          <div className="flex flex-col items-center">
            {/* LabExpert */}
            <svg className="w-10 h-10 text-gray-400 mb-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zm-7-4h2v-2h-2v2zm0-4h2V7h-2v6z"/>
            </svg>
            <span className="text-gray-500 font-medium">LabExpert</span>
          </div>
          <div className="flex flex-col items-center">
            {/* MindCare */}
            <svg className="w-10 h-10 text-gray-400 mb-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <span className="text-gray-500 font-medium">MindCare</span>
          </div>
          <div className="flex flex-col items-center">
            {/* MédiData */}
            <svg className="w-10 h-10 text-gray-400 mb-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
            <span className="text-gray-500 font-medium">MédiData</span>
          </div>
        </div>
      </section>
// ...existing code...
    </>
  );
}

export default LandingPage;