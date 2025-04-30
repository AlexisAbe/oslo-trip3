import { useState, useEffect } from "react";

const itinerary = [
  {
    day: "Mercredi soir",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Oslo_Airport_Norway.jpg/800px-Oslo_Airport_Norway.jpg",
    steps: [
      {
        time: "22h30",
        title: "Arrivée à Oslo Gardermoen",
        link: "https://goo.gl/maps/NnQrp2fGUdN2",
      },
      {
        time: "22h50",
        title: "Train Flytoget jusqu’à Oslo S",
        link: "https://flytoget.no/en",
      },
      {
        time: "23h10",
        title: "Marche jusqu’au logement - Møllergata 42B",
        link: "https://goo.gl/maps/tK2LWSkxBwsEYQZy6",
      },
      {
        time: "23h30",
        title: "Verre ou dîner rapide - Torggata Botaniske ou Illegal Burger",
        link: "https://goo.gl/maps/QpVmbvZBG5g1PL1G9",
      },
    ],
  },
  {
    day: "Jeudi",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Oslo_Opera_House_from_the_harbor.jpg/800px-Oslo_Opera_House_from_the_harbor.jpg",
    steps: [
      {
        time: "9h00",
        title: "Petit-déj chez Fuglen",
        link: "https://goo.gl/maps/FaBkVApXx6zAwEXx6",
      },
      {
        time: "10h00",
        title: "Opéra d’Oslo + promenade dans Barcode",
        link: "https://goo.gl/maps/nQXXMC5rAJkTzWvQ7",
      },
      {
        time: "12h30",
        title: "Déjeuner chez Vaaghals",
        link: "https://goo.gl/maps/tZrDZz6iM2U2",
      },
      {
        time: "14h00",
        title: "Visite du musée MUNCH",
        link: "https://goo.gl/maps/3qezkLccwJw1Pd8b9",
      },
      {
        time: "17h30",
        title: "Pause détente à Sørenga Sjøbad",
        link: "https://goo.gl/maps/2ogHHnsfqexKy5sf8",
      },
      {
        time: "19h00",
        title: "Dîner chez Arakataka",
        link: "https://goo.gl/maps/Fi6uL6LdQWoRcpRW7",
      },
      {
        time: "21h00",
        title: "Bar Blå ou Andre til Høyre",
        link: "https://goo.gl/maps/cV86F2j9JoS1PJG99",
      },
    ],
  },
  {
    day: "Vendredi",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Vigeland_Sculpture_Park_Oslo.jpg/800px-Vigeland_Sculpture_Park_Oslo.jpg",
    steps: [
      {
        time: "9h00",
        title: "Tram pour Vigeland Park",
        link: "https://goo.gl/maps/XrD9pKNvPBRtNuE16",
      },
      {
        time: "10h00",
        title: "Balade dans le parc + Café Vigeland",
        link: "https://goo.gl/maps/mKkCJvK5kB22",
      },
      {
        time: "12h30",
        title: "Déjeuner à Mathallen Oslo",
        link: "https://goo.gl/maps/S2mu94FKnmnYmd2Y9",
      },
      {
        time: "14h30",
        title: "Balade à Grünerløkka, street art + Åpent Bakeri",
        link: "https://goo.gl/maps/k2XmRhWYLPm",
      },
      {
        time: "19h00",
        title: "Dîner au Benjamin Bar & Bistro",
        link: "https://goo.gl/maps/ef8yYoiknDRYbGJW9",
      },
    ],
  },
  {
    day: "Dimanche",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Oslo_Central_Station_interior.jpg/800px-Oslo_Central_Station_interior.jpg",
    steps: [
      {
        time: "8h15",
        title: "Départ du logement et trajet vers Oslo S",
        link: "https://goo.gl/maps/ru4zRoDKxJU2",
      },
      {
        time: "8h40",
        title: "Train Flytoget jusqu'à Gardermoen",
        link: "https://flytoget.no/en",
      },
      {
        time: "11h30",
        title: "Vol retour",
        link: "https://www.osl.no/en",
      },
    ],
  },
];

const checklist = [
  "Passeport / carte d'identité",
  "Chargeur de téléphone",
  "Veste imperméable",
  "Chaussures confortables",
  "Crème solaire et lunettes de soleil",
  "Adaptateur européen (si nécessaire)",
];

export default function App() {
  const [dayIndex, setDayIndex] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const day = itinerary[dayIndex];

  useEffect(() => {
    const hour = new Date().getHours();
    setIsDark(hour < 7 || hour >= 20);
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "sans-serif",
        backgroundColor: isDark ? "#1a1a1a" : "#f4f4f4",
        color: isDark ? "#fff" : "#000",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>📅 {day.day}</h1>
      {day.image && (
        <img
          src={day.image}
          alt={day.day}
          style={{ width: "100%", borderRadius: "1rem", marginBottom: "1.5rem" }}
        />
      )}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {day.steps.map((step, index) => (
          <li
            key={index}
            style={{
              background: isDark ? "#2a2a2a" : "#fff",
              borderRadius: "12px",
              padding: "1rem",
              marginBottom: "1rem",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ fontSize: "0.9rem", color: isDark ? "#ccc" : "#666" }}>{step.time}</div>
            <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>{step.title}</div>
            <a
              href={step.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "0.5rem",
                color: isDark ? "#8ab4f8" : "#0070f3",
                textDecoration: "underline",
              }}
            >
              Ouvrir dans Google Maps
            </a>
          </li>
        ))}
      </ul>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
        <button onClick={() => setDayIndex(dayIndex - 1)} disabled={dayIndex === 0}>
          ⬅️ Jour précédent
        </button>
        <button onClick={() => setDayIndex(dayIndex + 1)} disabled={dayIndex === itinerary.length - 1}>
          Jour suivant ➡️
        </button>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.4rem" }}>🧳 Check-list de voyage</h2>
        <ul>
          {checklist.map((item, idx) => (
            <li key={idx} style={{ marginTop: "0.3rem" }}>✅ {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
