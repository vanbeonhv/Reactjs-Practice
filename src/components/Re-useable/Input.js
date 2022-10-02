export default function Input(props) {
  return (
    <input
      type={props.type}
      name={props.name}
      className={props.className}
      onChange={props.onChange}
      placeholder={props.placeholder}
      onKeyUp={props.onKeyUp}
      style={props.style}
    ></input>
  );
}
