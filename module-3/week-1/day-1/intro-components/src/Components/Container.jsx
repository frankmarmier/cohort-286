function Container(props) {
  return (
    <div
      style={{
        padding: 30, // this will be transformed into px
      }}
    >
      {props.children}
    </div>
  );
}

export default Container;
