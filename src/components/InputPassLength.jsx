export default function InputPassLength ({ passLength, handleChange }) {
  return (
    <fieldset className='pass-length'>
      <legend>Longitud de la Contraseña:</legend>
      <input
        name='passLength'
        type='range'
        min='5'
        max='128'
        value={passLength}
        onChange={handleChange}
      />
      <input
        type='number'
        min='5'
        max='128'
        value={passLength}
        onChange={handleChange}
      />
    </fieldset>
  )
}
