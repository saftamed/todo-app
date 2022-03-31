import "./style.css";
import ListTask from "./component/ListTask";
import Addtask from "./component/Addtask";

import { todoActions } from "./store/todo-slice";
import { useDispatch } from 'react-redux'
function App() {
  const dispatch = useDispatch();

  return (
    <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
      <div className="row m-1 p-4">
        <div className="col">
          <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
            <i className="fa fa-list-ul bg-primary text-white rounded p-2"></i>
            <u>My Todo-App</u>
          </div>
        </div>
      </div>

      <Addtask/>

      <div className="row m-1 p-3 px-5 justify-content-end">
        <div className="col-auto d-flex align-items-center">
          <label className="text-secondary my-2 pr-2 view-opt-label">Filter</label>
          <select className="custom-select custom-select-sm btn my-2" onChange={(e) => dispatch(todoActions.setFilter(e.target.value))}>
            <option value="2" >
              All
            </option>
            <option value="1">Completed</option>
            <option value="0">Active</option>
          </select>
        </div>
      </div>

      <ListTask />
    </div>
  );
}

export default App;
