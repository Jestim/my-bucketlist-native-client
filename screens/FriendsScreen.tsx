import MainComponent from '../components/MainComponent';
import HeaderComponent from '../components/HeaderComponent';
import StandardTextComponent from '../components/StandardTextComponent';

function FriendsScreen() {
  return (
    <>
      <HeaderComponent title="Friends" />
      <MainComponent>
        <StandardTextComponent text="This is the freinds screen" />
      </MainComponent>
    </>
  );
}

export default FriendsScreen;
