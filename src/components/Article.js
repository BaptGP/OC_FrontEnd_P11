import kasa from "../json/kasa.json";
import { Link } from "react-router-dom";
import "../assets/css/Article.css";

function Article() {
  return (
    <div className="article">
      {kasa.map((item, index) => (
        <Link
          to={`/article?id=${item.id}`}
          key={item.id}
          className={"article_link"}
        >
          <img src={item.cover} alt={item.title} className={"img_article"} />
          <div></div>
          <span>{item.title}</span>
        </Link>
      ))}
    </div>
  );
}

export default Article;
