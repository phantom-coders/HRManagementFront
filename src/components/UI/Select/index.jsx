export default function Select({
  label,
  name,
  value,
  id,
  onChange,
  className,
  options,
  disabled,
  isRequired,
  withoutDefaultSelect,
  style,
}) {
  return (
    <>
      {label && (
        <label htmlFor={label}>
          {label} {isRequired && <span style={{ color: "red" }}>*</span>}{" "}
        </label>
      )}
      <select
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        className={className}
        disabled={disabled}
        style={style}
      >
        {withoutDefaultSelect || <option value="--select--">Select</option>}
        {options?.length > 0 &&
          options?.map((d, i) => (
            <option key={i + 1} value={d} selected={value === d ? true : false}>
              {d}
            </option>
          ))}
      </select>
    </>
  );
}
