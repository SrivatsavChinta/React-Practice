import styles from "./MemberCard.module.scss";

export type Member = {
  id: string;
  name: string;
  gender: "Male" | "Female";
  age: number;
};

type Props = {
  member: Member;
};

export const MemberCard = ({ member }: Props) => {
  return (
    <div className={styles.card}>
      <p>Name: {member.name}</p>
      <p>Gender: {member.gender}</p>
      <p>Age: {member.age}</p>
      <p>ID: {member.id}</p>
    </div>
  );
};
