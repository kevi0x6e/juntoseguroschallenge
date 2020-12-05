import React from "react";
import { Card } from "react-bootstrap";

export default function card({ task, onClick }) {
  return (
    <div onClick={() => onClick(task._id, task.completed)}>
      <Card className="m-2" id="card">
        <Card.Header>Completed: {String(task.completed)}</Card.Header>
        <Card.Body>
          <Card.Text>{task.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
