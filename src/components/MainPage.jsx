import Header from "./Header";
import Chat from "../containers/Chat";

const MainPage = ({ onLoggedOut }) => {
  return (
    <div>
      <Header onLoggedOut={onLoggedOut} />
      <Chat onLoggedOut={onLoggedOut} />
    </div>
  );
};

export default MainPage;