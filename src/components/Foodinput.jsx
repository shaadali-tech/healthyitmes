import styles from "./Foodinput.module.css";

const Foodinput = ({ handleonchange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter food item"
        className={styles.Foodinput}
        onKeyDown={handleonchange}
      />
    </div>
  );
};

export default Foodinput;
