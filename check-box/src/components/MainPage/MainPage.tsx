import { CheckBox } from "../CheckBox/CheckBox";
import { nestedCheckboxData } from "../../data/nestedData";
import { type CheckboxNode } from "../../interfaces/checkbox";
import styles from "./MainPage.module.scss";
import { useState } from "react";

export const MainPage = () => {
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>({});

  function renderRecursively(checkboxNode: CheckboxNode) {
    return (
      <div className={styles.levelContainer}>
        <CheckBox
          label={checkboxNode.label}
          checked={checkedMap[checkboxNode.id]}
          onChange={(value) => handleChange(checkboxNode, value)}
        />
        {checkboxNode.children &&
          checkboxNode.children.map((child) => renderRecursively(child))}
      </div>
    );
  }

  function parentIsChecked(
    checkboxNode: CheckboxNode,
    checked: boolean,
    map: Record<string, boolean>,
  ) {
    map[checkboxNode.id] = checked;
    checkboxNode?.children?.forEach((child) =>
      parentIsChecked(child, checked, map),
    );
  }

  function childIsChecked(
    checkboxNode: CheckboxNode,
    map: Record<string, boolean>,
  ): boolean {
    if (!checkboxNode.children) {
      return map[checkboxNode.id];
    }

    const allChildrenChecked = checkboxNode?.children
      .map((child) => childIsChecked(child, map))
      .every((checked) => checked === true);

    map[checkboxNode.id] = allChildrenChecked;

    return map[checkboxNode.id];
  }

  function handleChange(checkboxNode: CheckboxNode, checked: boolean) {
    setCheckedMap((prev) => {
      const updated = { ...prev };

      parentIsChecked(checkboxNode, checked, updated);
      childIsChecked(nestedCheckboxData, updated);

      return updated;
    });
  }

  return (
    <div className={styles.mainPage}>
      {renderRecursively(nestedCheckboxData)}
    </div>
  );
};
