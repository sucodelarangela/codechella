export const Input = ({ children, id, label, onChange, placeholder, type, values }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      {type !== 'select' ? (
        <input
          id={id}
          name={id}
          placeholder={placeholder}
          type={type}
          value={values}
          onChange={onChange}
        />
      ) : (
        <select
          id={id}
          name={id}
          defaultValue={placeholder}
          onChange={onChange}
        >
          <option value={placeholder} disabled>{placeholder}</option>
          {children}
        </select>
      )}
    </>
  );
};
