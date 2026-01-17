import { Button, Group, Input } from "@chakra-ui/react";
import styles from "./InputBox.module.scss";
import { FaPlus } from "react-icons/fa";

export const InputBox = () => {
  return (
    <Group attached className={styles.inputBox}>
      <Input placeholder="Enter your task" className={styles.input} />
      <Button className={styles.button}>
        <FaPlus className={styles.icon} />
      </Button>
    </Group>
  );
};
