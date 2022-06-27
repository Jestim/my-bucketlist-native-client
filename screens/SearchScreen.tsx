import HeaderComponent from '../components/HeaderComponent';
import MainComponent from '../components/MainComponent';
import StandardTextComponent from '../components/StandardTextComponent';

function SearchScreen() {
  return (
    <>
      <HeaderComponent title="Search" />
      <MainComponent>
        <StandardTextComponent text="This is the search screen" />
      </MainComponent>
    </>
  );
}

export default SearchScreen;
