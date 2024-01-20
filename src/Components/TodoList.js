import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask, completeTask } from "../redux/actions";
import TodoText from "../Components/TodoText";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (id, newText) => {
    dispatch(editTask(id, newText));
  };

  const handleComplete = (id) => {
    dispatch(completeTask(id));
  };

  return (
    <div className="listItem">
      <Container>
        <Row className="p-2">
          {tasks.map((task) => (
            <Col
              sm={6}
              md={4}
              lg={3}
              className="mb-3 d-flex align-items-stretch"
              key={task.id}>
              <TodoText text={task.text} completed={task.completed}/>
              <TodoItem key={task.id} handleDelete={()=>{handleDelete(task.id)}} handleComplete={()=>{handleComplete(task.id)}} handleEdit={(newText)=>handleEdit(task.id,newText)} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TodoList;
