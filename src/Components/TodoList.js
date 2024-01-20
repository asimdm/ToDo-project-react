import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask, completeTask } from "../redux/actions";
import TodoText from "../Components/TodoText";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import TodoItem from "./TodoItem";
import Card from "react-bootstrap/Card";
import { MdDoneAll } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { FaFilter } from "react-icons/fa";

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

  const [filter, setFilter] = useState("ALL");
  const [FilteredTask, setFilteredTask] = useState([]);

  useEffect(() => {
    if (filter === "ALL") {
      setFilteredTask(tasks);
    } else if (filter === "COMPLETE") {
      setFilteredTask(tasks.filter((task) => task.completed));
    } else if (filter === "INCOMPLETE") {
      setFilteredTask(tasks.filter((task) => !task.completed));
    }
  }, [filter, tasks]);

  return (
    <div>
      <div className="buttons">
        <button className="filterButton" onClick={() => setFilter("ALL")}>
          <MdDoneAll /> All
        </button>
        <button className="filterButton" onClick={() => setFilter("COMPLETE")}>
          <TiTick /> Completed
        </button>
        <button
          className="filterButton"
          onClick={() => setFilter("INCOMPLETE")}>
          <ImCross /> Incomplete
        </button>
      </div>
      <div className="filters">
        <FaFilter />
        <span>{filter}</span>
      </div>
      <Container>
        <Row className="p-2">
          {FilteredTask.map((task) => (
            <Col
              sm={6}
              md={4}
              lg={3}
              className="mb-3 d-flex align-items-stretch listItem"
              key={task.id}>
              <Card className="m-1 p-2">
                <Card.Body>
                  <TodoText text={task.text} completed={task.completed} />
                  <TodoItem
                    key={task.id}
                    handleDelete={() => {
                      handleDelete(task.id);
                    }}
                    handleComplete={() => {
                      handleComplete(task.id);
                    }}
                    handleEdit={(newText) => handleEdit(task.id, newText)}
                  />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TodoList;
