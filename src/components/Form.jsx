import React, {useState} from "react";

const Form = (props) => {
  const [name, setName] = useState('');

  const handleChange = (e) =>{
    setName(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    props.addTask(name);
    if (name === '') {
      return alert('Sorry, your task is empty :(')
    }
    setName('')
  }


  return (
      <div className="mb-3">
        <form onSubmit={handleSubmit}
              className="d-flex">
          <div className="me-3">
            <input onChange={handleChange}
              type="text"
              value={name}
              required=""
              className="form-control"
              placeholder="I am going..."/>
          </div>
          <button type="submit" className="btn btn-primary">add</button>
        </form>
      </div>
  )
}

export default Form;
