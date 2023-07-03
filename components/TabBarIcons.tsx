import React from "react";
import ExpensesIcon from "./tab-bar-icons/Expenses";
import ReportsIcon from "./tab-bar-icons/Reports";
import AddIcon from "./tab-bar-icons/Add";
import SettingsIcon from "./tab-bar-icons/Settings";

interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
  type: "expenses" | "reports" | "add" | "settings";
}

export const TabBarIcons = ({
  focused,
  color,
  size,
  type,
}: TabBarIconProps) => {
  switch (type) {
    case "expenses":
      return <ExpensesIcon width={size} height={size} color={color} />;
    case "reports":
      return <ReportsIcon width={size} height={size} color={color} />;
    case "add":
      return <AddIcon width={size} height={size} color={color} />;
    case "settings":
      return <SettingsIcon width={size} height={size} color={color} />;
    default:
      return null;
  }
};
