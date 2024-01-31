export default function FileInput({ label, id, name, onChange, isDisable }) {
  return (
    <>
      <div className="file">
        <label htmlFor={label}>{label}</label>
        <input
          type="file"
          id={id}
          name={name}
          onChange={onChange}
          disabled={isDisable}
          aria-label="File browser example"
        />
        <span className="file-custom"></span>
      </div>
    </>
  );
}
