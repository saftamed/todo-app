import {React} from 'react'
import { Form } from "react-bootstrap";
import { todoActions } from "../store/todo-slice";
import { useDispatch } from 'react-redux'

const Task = ({task}) => {
  const dispatch = useDispatch();

  return (
    <div className="row mx-1 px-5 w-80">
    <div className="col mx-auto">
      <div className="row px-3 align-items-center todo-item rounded">
        <div className="col-auto m-1 p-0 d-flex align-items-center">
          <h2 className="m-0 p-0">
            <Form.Check
              type="switch"
              checked={task.isDone}
              onChange={() => dispatch(todoActions.setDone(task.id))}
            />
          </h2>
        </div>
        <div className="col px-1 m-1 d-flex align-items-center">
          <h3 style={task.isDone?{textDecoration:'line-through'}:{}}>{task.description}</h3>
        </div>
        <div className="col-auto m-1 p-0 px-3 d-none"></div>
        <div className="col-auto m-1 p-0 todo-actions">
          <div className="row d-flex align-items-center justify-content-end">
            <h5 className="m-0 p-0 px-2" onClick={() => dispatch(todoActions.startEdit(task.id))}>
              <i className="fa fa-pencil text-info btn m-0 p-0"></i>
            </h5>
            <h5 className="m-0 p-0 px-2" onClick={() => dispatch(todoActions.deleteTodo(task.id))}>
              <i className="fa fa-trash-o text-danger btn m-0 p-0"></i>
            </h5>
          </div>
        </div>
      </div>
    </div>


  </div>
  )
}

export default Task