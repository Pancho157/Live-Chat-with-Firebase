import "./App.css";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import SignIn from "./components/SignIn/SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./bbddConnection/BBDDConnection";

function App() {
  const [user] = useAuthState(auth);
  return (
    <main className="main-section">
      <div>{user ? <ChatRoom /> : <SignIn />}</div>
    </main>
  );
}

export default App;
