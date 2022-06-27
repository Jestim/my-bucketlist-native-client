import MainComponent from '../components/MainComponent';
import HeaderComponent from '../components/HeaderComponent';
import StandardTextComponent from '../components/StandardTextComponent';

function SignUpScreen() {
  return (
    <>
      <HeaderComponent title="Sign Up" />
      <MainComponent>
        <StandardTextComponent text="This is the sign up screen" />
      </MainComponent>
    </>
  );
}

export default SignUpScreen;
