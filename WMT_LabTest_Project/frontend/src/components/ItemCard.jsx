import { Link } from "react-router-dom";

const formatDiscountPercentage = (discountPercentage) => {
  const numericDiscount = Number(discountPercentage);
  if (!Number.isFinite(numericDiscount)) return discountPercentage;
  if (Number.isInteger(numericDiscount)) return numericDiscount;
  return numericDiscount.toFixed(2);
};

function ItemCard({ item, onDelete }) {
  const formattedDiscount = formatDiscountPercentage(item.discountPercentage);

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
