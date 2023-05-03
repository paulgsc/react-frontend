import { useDispatch } from "react-redux";
import { gmailRegister } from "./actions/firebaseActions";

function App() {
  const dispatch = useDispatch();
  const handleGmail = (e) => {
    e.preventDefault();
    dispatch(gmailRegister());
  };

  return (
    <div>
      <h1>
        foo!
        <button onClick={handleGmail}>click me!</button>
      </h1>
    </div>
  );
}

export default App;
