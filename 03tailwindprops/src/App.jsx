import "./App.css";
import Card from "./components/Card";

function App() {
  let username = "affan";
  return (
    <>
      <h1 className="bg-green-400 rounded-xl text-black mb-5">Tailwind</h1>
      <Card username={username} btntext="clickme" />
      <Card username={username} />

    </>
  );
}

export default App;
