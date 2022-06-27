import HeaderComponent from '../components/HeaderComponent';
import MainComponent from '../components/MainComponent';
import StandardTextComponent from '../components/StandardTextComponent';

function MyBucketlistScreen() {
  return (
    <>
      <HeaderComponent title="My Bucketlist" />
      <MainComponent>
        <StandardTextComponent text="Here is my list" />
      </MainComponent>
    </>
  );
}

export default MyBucketlistScreen;
