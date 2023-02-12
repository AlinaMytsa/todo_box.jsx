import React, {useState} from "react";
import Form from "./Form";
import Item from "./Item";
import {v4 as uuid} from 'uuid';


const TodoBox = (props) => {
  const [tasks, setTasks] = useState(props.tasks)


  const addTask = (name) => {
    const newTask = {id: `todo-${uuid()}`, name};
    setTasks([newTask, ...tasks])
  }

  const onRemove = (id) =>{
    const remainingTasks = tasks.filter((task) => id !== task.id)
    setTasks(remainingTasks)
  }

  const taskList = tasks.map((task) => (
    <Item
      id={task.id}
      name={task.name}
      key={task.id}
      onRemove={onRemove}
    />
  ))


  return (
    <>
      <Form addTask={addTask}/>

      <div className="row">
        <ul className="col-auto">{taskList}</ul>
      </div>
    </>
  )
}

export default TodoBox;
