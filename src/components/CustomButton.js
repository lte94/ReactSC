function CustomButton(props) {
  const { color, onClick, children } = props;
  // 구조분해 할당({props.어쩌고}가 많아지기 때문에)
  if (color) {
    return (
      <button
        style={{ backgroundColor: color, color: 'white' }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return <button onClick={onClick}>{children}</button>;
}

export default CustomButton;
