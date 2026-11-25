
import { useEffect, useState } from "react";
import api from "../services/api";

function Items() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/products");

      // Adjust this if your API returns a different response shape.
      const data = response.data;

      setItems(Array.isArray(data) ? data : data.items || []);

    } catch (err) {
      console.error("API Error:", err);

      setError(
        err.response?.data?.message ||
        err.message ||
        "Failed to fetch items"
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading items...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div className="page">
      <h1>Items Management</h1>

      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.title || item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.quantity ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Items;
