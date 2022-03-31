import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../store/todo-slice";

import Task from "./Task";
import { Modal, Button, Form } from "react-bootstrap";

const ListTask = () => {
  const dispatch = useDispatch();

  const handleClose = () => dispatch(todoActions.endEdit());
  const handleSave = () => dispatch(todoActions.saveChanges(newDisc));
  const todo = useSelector((state) => state.todo);
  const filterCallBack = (t) =>
  todo.filter === "2" ||
    (todo.filter === "1" && t.isDone) ||
    (todo.filter === "0" && !t.isDone);


  const [newDisc, setNewDisc] = useState(todo.edit.disc);
  return (
    <div>
      {todo.list.filter(filterCallBack).map((t) => (
        <Task task={t} key={t.id} />
      ))}
      <Modal show={todo.edit.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="inputPassword5">Edit Todo</Form.Label>
          <Form.Control
            type="text"
            defaultValue={todo.edit.disc}
            onChange={(e) => setNewDisc(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ListTask;
