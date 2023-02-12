import React from "react";


const Item = (props) => {

  return (

      <li>{props.name}
      <button onClick={()=> props.onRemove(props.id)}
              type="button"
              className="btn btn-primary btn-sm">
        Delete
      </button>
      </li>

  )
}


export default Item;
