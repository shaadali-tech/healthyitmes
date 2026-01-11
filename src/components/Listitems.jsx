const Listitems = ({ item }) => {
  return (
    <ul class="list-group">
      {item.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
};
export default Listitems;
