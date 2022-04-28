const Input = ({ name, value, label, onChange, type }) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input
          onChange={onChange}
          value={value}
          type={type}
          className="form-control"
          id={name}
          name={name}
        />
      </div>
    </>
  );
};

export default Input;
