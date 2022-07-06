import { useEffect, useState } from "react";
import kasa from "../../json/kasa.json";
import Accordeons from "../Accordeons";
import ImageSlider from "../ImageSlider";
import "../../assets/css/Slug.css";
import Star from "../star/Star";

function SlugArticle() {
  const [getUrl, setGetUrl] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    const get = window.location.href;
    const url = get.split("=")[1];
    const searchArticle = kasa.filter((item) => item.id === url);
    if (searchArticle.length > 0) {
      setGetUrl(url);
      setData(searchArticle[0]);
    } else {
      window.location.href = "http://localhost:3000/error";
    }
  }, []);
  if (getUrl != null && data != null) {
    return (
      <main>
        <ImageSlider data={data.pictures} />

        <div>

        <div className="slug_header">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1 style={{ margin: 0, marginBottom: 10, color: "#FF6060" }}>
              {data.title}
            </h1>
            <p style={{ margin: 0, color: "#FF6060" }}>{data.location}</p>
          </div>
          <div className="slug_profil-star"
          >
            <div className="slug_profil-header"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "right",
                  marginRight: 10,
                }}
              >
                <span style={{ color: "#FF6060" }}>
                  {data.host.name.split(" ")[0]}
                </span>
                <span style={{ color: "#FF6060" }}>
                  {data.host.name.split(" ")[1]}
                </span>
              </div>
              <div className="slug_profil">
                <img
                  src={data.host.picture}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 100,
                    objectFit: "contain",
                  }}
                  alt={`profil de ${data.host.name}`}
                />
              </div>
            </div>
            <Star star={data.rating} />
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", margin: "20px 0" }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            {data.tags.map((item, index) => (
              <span className="slug_filtre" key={index}>
                {item}
              </span>
            ))}
          </div>
        </div>


        </div>

        <div className="div_accordeon">
          <div className="div_accordeon-solo">
            <Accordeons
              title={"Description"}
              content={data.description}
              flex={1}
              key={"Description"}
            />
          </div>
          <div className="div_accordeon-solo">
            <Accordeons
              title={"Équipements"}
              content={data.equipments}
              flex={1}
              key={"Equipements"}
            />
          </div>
        </div>
      </main>
    );
  } else {
    return null;
  }
}

export default SlugArticle;
