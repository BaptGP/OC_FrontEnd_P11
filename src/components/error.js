import { Link } from "react-router-dom";

function Error() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        height:"70vh"
      }}
    >
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h1 style={{ fontSize: 200, color: "#FF6060", margin:0}}>404</h1>
        <p style={{ color: "#FF6060", fontSize: 30, margin:0}}>
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <div style={{display:"flex"}}>
          <Link to="/" style={{color:"#FF6060"}}>
              <span>Retourner sur la page d'accueil</span>
          </Link>
      </div>
    </main>
  );
}

export default Error;
