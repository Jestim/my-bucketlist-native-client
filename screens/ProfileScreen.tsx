import HeaderComponent from '../components/HeaderComponent';
import MainComponent from '../components/MainComponent';
import StandardTextComponent from '../components/StandardTextComponent';

function ProfileScreen() {
  return (
    <>
      <HeaderComponent title="Profile" />
      <MainComponent>
        <StandardTextComponent text="This is the profile screen" />
      </MainComponent>
    </>
  );
}

export default ProfileScreen;
