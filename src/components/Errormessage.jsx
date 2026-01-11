const Erromessage = ({ item }) => {
  return <h2>{item.length === 0 && <p>No items available</p>}</h2>;
};

export default Erromessage;
