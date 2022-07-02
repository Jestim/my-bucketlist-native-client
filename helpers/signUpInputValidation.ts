import SignUpInputType from '../types/SignUpInputType';

function validateSignUpInput(signUpInput: SignUpInputType): string[] {
  const errors: string[] = [];

  Object.keys(signUpInput).forEach((key, index) => {
    const value = Object.values(signUpInput)[index];

    const error = validate(key, value, signUpInput);

    if (error !== '') {
      errors.push(error);
    }
  });

  return errors;
}

function validate(
  key: string,
  value: string,
  signUpInput: SignUpInputType,
): string {
  let error = '';

  switch (key) {
    case 'username':
      if (value === '') {
        error = 'Username must not be empty';
      }
      break;
    case 'email':
      if (
        !value.match(
          /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
        )
      ) {
        error = 'Email adress must be valid';
      }
      break;
    case 'password':
      if (!value.match(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/)) {
        error =
          'Password must contain at least 6 characters, 1 uppercase, 1 lowercase letter, 1 number with no spaces.';
      }
      break;
    case 'confirmPassword':
      if (!value.match(signUpInput.password)) {
        error = 'Confirm password must match';
      }
      break;
    case 'firstName':
      if (value === '') {
        error = 'First Name must not be empty';
      }
      break;
    case 'lastName':
      if (value === '') {
        error = 'Last Name must not be empty';
      }
      break;
    case 'age':
      if (!value.match(/^$|^(0?[1-9]|[1-9][0-9]|[1][0-9][0-9]|200)$/)) {
        error = 'Age must be a number';
      }
      break;
    default:
      break;
  }
  return error;
}

export default validateSignUpInput;
