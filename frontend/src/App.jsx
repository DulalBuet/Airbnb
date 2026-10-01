import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <SearchBar />
        <section className="hero">
          <h2>Welcome to Airbnb</h2>
          <p>Find places to stay on your next trip.</p>
        </section>
        
      </main>
    </>
  );
}

export default App;