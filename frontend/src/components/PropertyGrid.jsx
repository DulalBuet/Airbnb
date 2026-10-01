import PropertyCard from "./PropertyCard";

function PropertyGrid({ properties }) {
  return (
    <section className="property-grid">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
        />
      ))}
    </section>
  );
}

export default PropertyGrid;