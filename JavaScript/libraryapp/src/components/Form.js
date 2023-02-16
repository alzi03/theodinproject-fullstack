import { useState } from 'react'
import React from 'react'

function MyForm(){
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
  }
  
  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs((prevState) => 
      ({...prevState, [name]:value})
  )}

  return(
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
  )
}