import styles from "./rating-table.module.scss";

type RatingTaleDataProps = {
  name: string,
  score: number,
}[];

export const RatingTable = ({ data }: { data: RatingTaleDataProps }) => {
  return (
    <table className={styles.ratingTable}>
      <tbody>
        {data.map(({ name, score }, index) => (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{name}</td>
            <td>{score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
