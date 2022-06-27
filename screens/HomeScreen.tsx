import MainComponent from '../components/MainComponent';
import HeaderComponent from '../components/HeaderComponent';
import StandardTextComponent from '../components/StandardTextComponent';

function HomeScreen() {
  return (
    <>
      <HeaderComponent title="Home" />
      <MainComponent>
        <StandardTextComponent text="This is the home screen" />
      </MainComponent>
    </>
  );
}

export default HomeScreen;
