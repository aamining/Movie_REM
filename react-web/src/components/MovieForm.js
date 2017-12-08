import React from 'react'

export default function MovieForm({onSubmit}) {

  function handleFormSubmission(event){
    const {elements}= event.target;
    const title =elements["title"].value;
    const yearReleased = elements["yearReleased"].value;
    onSubmit({title, yearReleased});


    console.log(yearReleased);
  }
  return (
<div id="my-form">
    <form onSubmit={handleFormSubmission}>
      <label>
        Title
        &nbsp;
        <input type="text" name="title" />
      </label>
      <label>
        Year
        <input type="number" name="yearReleased"/>
      </label>

      <button id="my-form-button" type="submit"> Create Movie!</button>
    </form>
</div>
  )
}
