import React from "react";
import "./description.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CommentIcon from "@mui/icons-material/Comment";

function Description({ summary, author, category, copyright, link }) {
  return (
    <>
      <div className="newsinfo-info">
        <div className="newsinfo-author">
          <img
            src="https://i0.wp.com/heroicheadshots.com/wp-content/uploads/2021/01/bg_sample_light_grey.jpg"
            alt=""
          />
          <p>{author}</p>
        </div>
        <div className="newsinfo-views newsinfo-comments__main">
          <VisibilityIcon sx={{ fontSize: 20 }} /> 376
        </div>
        <div className="newsinfo-comments__main">
          <CommentIcon sx={{ fontSize: 20 }} /> 200
        </div>
      </div>
      <div className="newsinfo-description">
        <p>{summary}</p>
        <a href={link}>
          <p className="newsinfo-link">Read more</p>
        </a>
      </div>
      <div className="newsinfo-copyright">
        <p>{copyright}</p>
      </div>
      <div className="newsinfo-tags">
        <div className="newsinfo-tags__main">Crpto</div>
        <div className="newsinfo-tags__main">{category.toLowerCase()}</div>
        <div className="newsinfo-tags__main">Elon Musk</div>
      </div>
    </>
  );
}

export default Description;
