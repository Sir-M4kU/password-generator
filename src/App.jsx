import { useState } from 'react'
import { passwordGenerator } from './logic/passwordGenerator'
import './index.css'
import './App.css'
import InputPassLength from './components/InputPassLength'
import FieldSpecialCharacter from './components/FieldSpecialCharacter'

export default function App () {
  const [password, setPassword] = useState('')
  const [passLength, setPassLength] = useState(5)
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.target))
    const passLength = Number.parseInt(data.passLength)
    setPassword(passwordGenerator({ length: passLength, specialCharacters: data.specialCharacters, azUpper: data.azUpper, azLower: data.azLower, numbers: data.numbers }))
  }
  const handleChange = (event) => {
    setPassLength(event.target.value)
  }
  const copyPassword = () => {
    navigator.clipboard.writeText(password)
  }

  return (
    <div className='body-page'>
      <h1>Generador de Contraseñas</h1>
      <div className='generated-password'>
        {
          password &&
            <>
              <span>{password}</span>
              <button onClick={copyPassword}>Copiar</button>
            </>
        }
      </div>
      <form className='form-pass-generator' onSubmit={handleSubmit}>
        <div className='container'>
          <InputPassLength handleChange={handleChange} passLength={passLength} />
          <FieldSpecialCharacter />
        </div>
        <button>Generar contraseña</button>
      </form>
    </div>
  )
}
