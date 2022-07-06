import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useEffect, useState } from "react";

function Star({ star }) {
  const [nbStar, setNbStar] = useState(null);
  const calculStar = () => {
    let arrayStar = [];
    for (let i = 0; i < star; i++) {
      arrayStar.push("star");
    }
    if (star < 5) {
      let noStar = 5 - star;
      for (let i = 0; i < noStar; i++) {
        arrayStar.push("noStar");
      }
    }
    console.log(star)
    setNbStar(arrayStar);
  };

  useEffect(() => {
    calculStar();
  });

  if (nbStar != null) {
    return (
      <div>
        {nbStar.map((item) => (
          <FontAwesomeIcon
            icon={solid("star")}
            style={{color: item === "star" ? "#FF6060" : "#E3E3E3", fontSize:20, margin:"0 2px"}}
          />
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default Star;
