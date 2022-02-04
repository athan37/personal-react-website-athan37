import './App.css';
import galaxy from "./galaxy.jpg";

function App() {
  return (
    <>
          <section>
              <img id="main-img" src={galaxy} alt="Profile pic"/>
          </section>
          <aside>
              <div className="main-text-container">
                  <h1>Hi, my name is Duc Anh</h1>
                  <p>Some details about me: </p>
                  <ul>
                      <li>Bates 2024</li>
                      <li>Sophomore </li>
                      <li>Math major</li>
                  </ul>
                  <p>Fact: I'm taking 4 Math courses right now</p>
              </div>
          </aside>
    </>
  );
}

export default App;
