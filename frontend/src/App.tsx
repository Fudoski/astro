import axios from "axios";
import "./App.css";

axios.defaults.baseURL = "https://localhost:8443";

function App() {
  const checkBackend = async () => {
    axios.get("/hello").then((res) => console.log(res.data));
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <button type="button" onClick={checkBackend}>
        check backend
      </button>
    </div>
  );
}

export default App;
