import InputCheckBox from './InputCheckBox'

export default function FieldSpecialCharacter () {
  return (
    <fieldset className='special-characters'>
      <legend>Caracteres especiales:</legend>
      <InputCheckBox
        name='specialCharacters'
        id='special-characters'
      >
        !@#$%^&*
      </InputCheckBox>
      <InputCheckBox
        name='azUpper'
        id='az-uppercase'
      >
        A-Z
      </InputCheckBox>
      <InputCheckBox name='azLower' id='az-lowercase'>
        a-z
      </InputCheckBox>
      <InputCheckBox
        name='numbers'
        id='numbers'
      >
        0-9
      </InputCheckBox>
    </fieldset>
  )
}
