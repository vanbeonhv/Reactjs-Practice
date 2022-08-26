export default function Input(props) {
  return (
    <div className="control">
      <label className="form-label">{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        className={props.className}
        onChange={props.onChange}
        placeholder={props.placeholder}
        onKeyUp={props.onKeyUp}
      ></input>
    </div>
  );
}
