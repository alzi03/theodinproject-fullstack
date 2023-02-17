import React from "react";
import { useState } from 'react';
import Entry from "./Entry.js"

// Pictures 
import nameWind from "./assets/toftw_cover.jpeg"
import wiseFear from "./assets/twmf_cover.jpg"

console.log(nameWind)

const Books = () => {

  const [libraryCatalog, addBook] = React.useState([])

  if (libraryCatalog.length === 0){
    addBook(prevState => [{
      title:'The Name of The Wind',
      author:'Patrick Rothfuss',
      pageCount:662,
      releaseDate:'March 27, 2007',
      image:nameWind
    },
    {
      title:'The Wise Man\'s Fear',
      author:'Patrick Rothfuss',
      pageCount: 994,
      releaseDate:'March 1, 2011',
      image:wiseFear

    }])
  }

  const entries = libraryCatalog.map(
    book =>
    <Entry
      key={book.title}
      title={book.title}
      author={book.author}
      pageCount={book.pageCount}
      releaseDate={book.releaseDate}
      image={book.image}
    />,
  )


  const [inputs, setInputs] = React.useState({
    title:"",
    author:"",
    pageCount:'',
    releaseDate:"",
    image:""
  })

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(inputs)
    addBook(prevState=>
      [...prevState, 
      {
        title:inputs.title,
        author:inputs.author,
        pageCount:inputs.pageCount,
        releaseDate:inputs.releaseDate,
        image:inputs.image,
      }]
    )
    setInputs({
      title:"",
      author:"",
      pageCount:'',
      releaseDate:"",
      image:""
  })}
  
  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs((prevState) => 
      ({...prevState, [name]:value})
  )}


  return(
    <div className="container">
      <div className="entries">
        {entries}
      </div>
      <div className="formContainer">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="title"
            value={inputs.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <input
            type="text"
            name="author"
            value={inputs.author}
            onChange={handleChange}
            placeholder="Author"
          />
          <input
            type="number"
            name="pageCount"
            value={inputs.pageCount}
            onChange={handleChange}
            placeholder="Page Count"
          />
          <input
            type="text"
            name="releaseDate"
            value={inputs.releaseDate}
            onChange={handleChange}
            placeholder="Release Date"
          />
          <input 
            type="text"
            name="image"
            value={inputs.image}
            onChange={handleChange}
            placeholder="Image Url"
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Books;
