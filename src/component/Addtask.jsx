import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoActions } from "../store/todo-slice";
function Addtask() {
  const dispatch = useDispatch();
  const [disc, setDisc] = useState('')

  return (
    <div className="row m-1 p-3">
    <div className="col col-11 mx-auto">
      <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
        <div className="col">
          <input
            className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
            type="text"
            placeholder="Add new .."
            onChange={(e)=> setDisc(e.target.value)}
            value={disc}
          />
        </div>

        <div className="col-auto px-0 mx-0 mr-2">
          <button onClick={(e)=>{ setDisc('');dispatch(todoActions.addTodo(disc))}} type="button" className="btn btn-primary">
            Add <i class="fa fa-plus-square" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Addtask