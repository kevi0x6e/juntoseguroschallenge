import React, { useState, useEffect } from "react";

import Card from "./components/card";

import api from "../../services/api";

import "./style.css";

function handleCardClick(id, completed) {
  api
    .put(`/tasks/${id}`, { completed: !completed })
    .then(() => console.log("só sucesso pai"))
    .catch(() => console.warn("deu merda"));
}

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get("/tasks").then(({ data }) => {
      console.log(data);
      setTasks(data);
    });
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {tasks.map((task, index) => (
        <Card key={index} task={task} onClick={handleCardClick} />
      ))}
    </div>
  );
}
