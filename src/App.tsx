import jope from "./assets/jope.png";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <div className="m-auto">
          <p className="font-mono font-bold italic">Jope Zone</p>
          <img src={jope} alt="Jope" />
        </div>
      </div>
    </>
  );
}

export default App;
