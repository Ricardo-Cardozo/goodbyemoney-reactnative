import React, { ReactNode, useMemo } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { theme } from "../theme";

interface Props {
  label: string;
  detail?: ReactNode;
  onClick?: () => void;
  swipeToDelete?: boolean;
  onDelete?: () => void;
  isDestructive?: boolean;
}

export const ListItem = ({
  label,
  detail,
  onClick,
  swipeToDelete,
  onDelete,
  isDestructive,
}: Props) => {
  const item = useMemo(
    () => (
      <TouchableOpacity
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: !!detail ? "space-between" : "flex-start",
          alignItems: "center",
          padding: 12,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.border,
          backgroundColor: theme.colors.card,
        }}
        onPress={onClick}
      >
        <Text style={{ color: isDestructive ? theme.colors.error : "white", fontSize: 18 }}>{label}</Text>
        {detail}
      </TouchableOpacity>
    ),
    []
  );

  if (swipeToDelete) {
    return (
      <Swipeable
        renderRightActions={() => (
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 100,
            }}
            onPress={onDelete}
          >
            <Text style={{ color: "white" }}>Delete</Text>
          </TouchableOpacity>
        )}
        onSwipeableRightOpen={onDelete}
      >
        {item}
      </Swipeable>
    );
  }

  return item;
};
