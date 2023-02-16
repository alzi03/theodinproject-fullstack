import React from "react";

export default function Entry (props) {
  return(
    <div className="entry">
      <div className="bookTitle">{props.title}</div>
      <div>{props.author}</div>
      <div>Released: {props.releaseDate}</div>
      <div className="pageCount">{props.pageCount} pages</div>
      <img src={props.image} width="250px"/>

    </div>
  )
}