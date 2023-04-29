export function passwordGenerator ({ length, specialCharacters, azUpper, azLower, numbers }) {
  let pass = ''
  const possible = {
    specialCharacters: '!@#$%^&*',
    letterUpper: 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
    letterLower: 'abcdefghijklmnñopqrstuvwxyz',
    numbers: '0123456789'
  }

  for (let i = 0; i <= length; i++) {
    if (specialCharacters) {
      pass += possible.specialCharacters.charAt(Math.floor(Math.random() * possible.specialCharacters.length))
    }
    if (pass.length >= length) break
    if (azUpper) {
      pass += possible.letterUpper.charAt(Math.floor(Math.random() * possible.letterUpper.length))
    }
    if (pass.length >= length) break
    if (azLower) {
      pass += possible.letterLower.charAt(Math.floor(Math.random() * possible.letterLower.length))
    }
    if (pass.length >= length) break
    if (numbers) {
      pass += possible.numbers.charAt(Math.floor(Math.random() * possible.numbers.length))
    }
    if (pass.length >= length) break
  }
  return pass
}
