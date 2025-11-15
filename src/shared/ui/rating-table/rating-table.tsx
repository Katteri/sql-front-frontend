import { useRatingData } from "./rating-table-model";
import styles from "./rating-table.module.scss";

export const RatingTable = () => {
  const data = useRatingData();

  return (
    <table className={styles.ratingTable}>
      <tbody>
        {data.map(({ name, score }, index) => (
          <tr>
            <td>{index+1}</td>
            <td>{name}</td>
            <td>{score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
