import { Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { colors } from "../../constants";
import { useSettingsStore } from "../../store/useSettingsStore";
import { Player } from "../../types";

type FavouritePlayerProps = {
  playerId: Player["id"];
  size?: "sm" | "md";
};
export const FavouritePlayer: FC<FavouritePlayerProps> = ({
  playerId,
  size = "md",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const { favouritePlayers, toggleFavouritePlayer } = useSettingsStore(
    ({ favouritePlayers, toggleFavouritePlayer }) => ({
      favouritePlayers,
      toggleFavouritePlayer,
    })
  );

  const isFavourite = favouritePlayers.includes(playerId);

  return (
    <Text
      cursor="pointer"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      color={colors.gold}
      fontSize={
        size === "md"
          ? { base: "48px", lg: "32px" }
          : { base: "32px", lg: "24px" }
      }
      onClick={() => {
        toggleFavouritePlayer(playerId);
      }}
    >
      {isFavourite || isHovered ? <FaStar /> : <FaRegStar />}
    </Text>
  );
};
