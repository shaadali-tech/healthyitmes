const Listitems = ({ item, bought }) => {
  return (
    <ul className="list-group">
      {item.map((food) => (
        <li
          key={food}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            bought ? "active" : ""
          }`}
        >
          {food}
          <button
            className="btn btn-success btn-sm"
            onClick={() => console.log("Buy button clicked")}
          >
            Buy
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Listitems;
