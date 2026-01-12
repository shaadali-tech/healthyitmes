const Erromessage = ({ item }) => {
  return (
    <h2>
      {item.length === 0 && <p>I am Hungry please add some food items</p>}
    </h2>
  );
};

export default Erromessage;
