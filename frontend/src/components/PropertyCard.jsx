function PropertyCard({ property }) {
  return (
    <article className="property-card">
      <img
        className="property-card__image"
        src={property.image}
        alt={property.title}
      />

      <div className="property-card__content">
        <div className="property-card__header">
          <h3>{property.title}</h3>
          <span>★ {property.rating}</span>
        </div>

        <p className="property-card__location">
          {property.location}
        </p>

        <p className="property-card__price">
          <strong>${property.price}</strong> night
        </p>
      </div>
    </article>
  );
}

export default PropertyCard;