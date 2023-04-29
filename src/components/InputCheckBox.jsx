export default function InputCheckBox ({ name, id, children, handleChange }) {
  return (
    <div>
      <input
        name={name}
        onChange={handleChange}
        type='checkbox'
        id={id}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  )
}
