import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import PropertyCard from "./components/PropertyCard";

const properties = [
  {
    id: 1,
    title: "Beautiful Beach House",
    location: "Cox's Bazar, Bangladesh",
    price: 80,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "Dhaka, Bangladesh",
    price: 55,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    id: 3,
    title: "Mountain Cabin",
    location: "Sajek, Bangladesh",
    price: 65,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
  },
  {
    id: 4,
    title: "Luxury Villa",
    location: "Sylhet, Bangladesh",
    price: 120,
    rating: 4.95,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
  },
];

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

        <section className="property-grid">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;