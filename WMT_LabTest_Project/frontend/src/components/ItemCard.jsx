import { Link } from "react-router-dom";

function ItemCard({ item, onDelete }) {
  const numericDiscount = Number(item.discountPercentage);
  const formattedDiscount = Number.isFinite(numericDiscount)
    ? Number.isInteger(numericDiscount)
      ? numericDiscount
      : numericDiscount.toFixed(2)
    : item.discountPercentage;

  return (
    <div className="card">
      <img
        src={item.imageUrl || "https://via.placeholder.com/400x220?text=Item"}
        alt={item.name}
        className="card-image"
      />
      <h3>{item.name}</h3>
      <p><strong>Category:</strong> {item.category}</p>
      <p><strong>Price:</strong> ${item.price}</p>
      <p><strong>Discount Percentage:</strong> {formattedDiscount}%</p>
      <p>{item.description}</p>

      <div className="card-actions">
        <Link className="btn secondary" to={`/edit-item/${item._id}`}>Edit</Link>
        <button className="btn danger" onClick={() => onDelete(item._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
