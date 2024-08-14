import clsx from "clsx";
import css from "../FriendListItem/FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  const color = clsx(isOnline ? css.online : css.offline);

  return (
    <div className={css.container}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={color}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
