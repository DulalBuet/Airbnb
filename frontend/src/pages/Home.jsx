import SearchBar from "../components/SearchBar";
import PropertyGrid from "../components/PropertyGrid";
import properties from "../data/properties";

function Home() {
  return (
    <main>
      <h2>Find your perfect stay</h2>

      <p>Discover amazing places to stay around Bangladesh.</p>

      <SearchBar />

      <PropertyGrid properties={properties} />
    </main>
  );
}

export default Home;