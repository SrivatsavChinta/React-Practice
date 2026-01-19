import { Button, Group, Input } from "@chakra-ui/react";
import styles from "./InputBox.module.scss";
import { FaPlus } from "react-icons/fa";
import { useState, type ChangeEvent } from "react";
import { useTaskStore } from "../../../store/taskStore";

export const InputBox = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const validInput = inputValue.trim().length > 0;
  const { setTaskList } = useTaskStore();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  };

  const handleAddTask = () => {
    if (!validInput) return;
    setTaskList(inputValue);
    setInputValue("");
  };

  return (
    <Group attached className={styles.inputBox}>
      <Input
        placeholder="Enter your task"
        className={styles.input}
        value={inputValue}
        onChange={handleInput}
      />
      <Button className={styles.button} onClick={handleAddTask}>
        <FaPlus className={styles.icon} />
      </Button>
    </Group>
  );
};
