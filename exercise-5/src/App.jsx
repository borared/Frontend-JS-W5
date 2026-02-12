import Film from "./components/Film";
import { AVAILABLE_MOVIES } from "./data";
function App() {
  return <>
  {/* Your code  here */}
  <header>
          <h1>Top Movie</h1>
          <p>Pick one to watch</p>
        </header>
        <main>
          <section className="movies-category">
            <ul className="movies">
              {AVAILABLE_MOVIES.map((film, index) => (
                <Film key={index} film={film} />
              ))}
            </ul>
          </section>
        </main>
  </>;
}

export default App;
