import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState } from "react";

function Accordeons({ title, content, flex }) {
  const [display, setDisplay] = useState("none");

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          backgroundColor: "#FF6060",
          padding: "10px 10px",
          borderRadius: 10,
          color: "white",
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <span>{title}</span>
        <FontAwesomeIcon
          icon={display === "none" ? solid("chevron-down") : solid("chevron-up")}
          onClick={() =>
            display === "none" ? setDisplay("flex") : setDisplay("none")
          }
        />
      </div>
      <span
        style={{
          backgroundColor: "#F6F6F6",
          padding: "10px 10px",
          borderBottomLeftRadius: 10,
          color: "#FF6060",
          borderBottomRightRadius: 20,
          position: "relative",
          top: -10,
          paddingTop: 20,
          display: display,
        }}
      >
        {Array.isArray(content) ? (
          <ul style={{display:"flex", flexDirection:"column", margin:0, padding:0}}>
            {content.map((item, index) => (
              <li key={index} style={{listStyle:"none"}}>{item}</li>
            ))}
          </ul>
        ) : (
          <span>{content}</span>
        )}
      </span>
    </div>
  );
}

export default Accordeons;
