import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  const Api_IMG = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="card">
      <div className="poster">
        <img src={props.poster_path? Api_IMG + props.poster_path : "https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw4NzUwMDM3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="" />
      </div>

      <div className="info">
        <p className="title">{props.title}</p>
        <p className="vote">{props.vote_average}</p>
      </div>

      <div className="overview">
        <h2 className="title_overview">Overview:</h2>
        <h3 className="overview_info">{props.overview}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
