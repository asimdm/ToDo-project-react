function TodoText(props) {
  const { text, completed } = props;
  return (
    <div className="item">
      {completed ? (
        <span style={{ textDecoration: "line-through" }}>{text}</span>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
}

export default TodoText;
