export default function Fonctionnalites() {
  const features = [
    {
      icon: "📅",
      title: "Gestion des rendez-vous",
      text: "Organisez tous vos rendez-vous médicaux en un seul endroit avec des rappels automatiques et la possibilité de synchroniser avec votre calendrier.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: "💊",
      title: "Suivi des médicaments",
      text: "Ne manquez plus jamais une dose grâce aux rappels personnalisés et suivez votre historique de prise de médicaments.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: "📁",
      title: "Stockage de documents",
      text: "Conservez tous vos documents médicaux (ordonnances, résultats d'analyses, radiographies) de manière sécurisée et accessible.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: "💛",
      title: "Suivi des constantes",
      text: "Enregistrez et visualisez l'évolution de vos constantes vitales (tension, glycémie, poids).",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: "⏰",
      title: "Alertes personnalisées",
      text: "Configurez des alertes pour vos rendez-vous, médicaments ou lorsque vos constantes sortent des seuils normaux.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: "🔒",
      title: "Sécurité des données",
      text: "Vos données médicales sont protégées par un chiffrement de bout en bout et stockées de façon sécurisée.",
      color: "bg-indigo-100 text-indigo-600",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Fonctionnalités principales</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Découvrez comment MedTrack simplifie la gestion de votre santé au quotidien.
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 text-left"
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full text-2xl font-semibold mb-4 ${item.color}`}
            >
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
