import styles from "./MemberCard.module.scss";

export interface IMemberCardProps {
  name: string;
  gender: string;
  age: number;
}

export const MemberCard = ({ name, gender, age }: IMemberCardProps) => {
  return (
    <div className={styles.card}>
      <p className={styles.name}>{name}</p>
      <p className={styles.gender}>{gender}</p>
      <p className={styles.age}>{age}</p>
    </div>
  );
};
