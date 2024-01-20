import Card from "react-bootstrap/Card";

function TodoText(props) {
  const { text, completed } = props;
  return (
    <div className="item">
      <Card className="m-1 p-2">
        <Card.Body>
          {(completed) ?
          <span style={{ textDecoration: "line-through" }}>{text}</span>
          :
            <span>{text}</span>}
        </Card.Body>
      </Card>
    </div>
  );
}

export default TodoText;
