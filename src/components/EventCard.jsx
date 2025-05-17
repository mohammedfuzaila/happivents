import React from 'react';
import { useCart } from '../context/CartContext';
import './EventCard.css';

const EventCard = ({ event }) => {
  const { addToCart } = useCart();

  return (
    <div className="event-card">
      <img src={event.image} alt={event.name} className="event-image" />
      <div className="event-details">
        <h3>{event.name}</h3>
        <p className="event-description">{event.description}</p>
        <p className="event-price">${event.price}</p>
        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(event)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default EventCard; 