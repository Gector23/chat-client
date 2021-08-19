import Header from './Header';
import Chat from '../containers/Chat';

const HomePage = ({ onLoggedOut }) => (
  <div>
    <Header onLoggedOut={onLoggedOut} />
    <Chat onLoggedOut={onLoggedOut} />
  </div>
);

export default HomePage;
