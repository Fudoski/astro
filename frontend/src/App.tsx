import axios from "axios";
import "./App.css";

axios.defaults.baseURL = "https://localhost:8443";

function App() {
  const checkBackend = async () => {
    axios
      .post("/auth/login", {
        username: "test",
        password: "password",
      })
      .then((res) => {
        const token = res.data.token;
        axios
          .get("/users/me", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((me) => console.log(me.data));
      });
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
