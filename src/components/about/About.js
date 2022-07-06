import about from "../../assets/about.png";
import Accordeons from "../Accordeons";
import "../../assets/css/AboutCSS.css"

const infoAbout = [
  {
    title: "Fiabilité",
    desc: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  },
  {
    title: "Respect",
    desc: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    desc: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: "Sécurité",
    desc: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

function About() {
  return (
    <main>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={about}
          style={{ borderRadius: 20 }}
          alt="illustration page à propos"
        />
        <div
          style={{
            width: 1240,
            height: 223,
            backgroundColor: "black",
            borderRadius: 20,
            position: "absolute",
            opacity: 0.3,
          }}
        ></div>
      </div>

      <div style={{marginTop:20}}>
        {infoAbout.map((item, index) => (
          <div className="accordeons">
            <Accordeons title={item.title} content={item.desc} key={index} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default About;
