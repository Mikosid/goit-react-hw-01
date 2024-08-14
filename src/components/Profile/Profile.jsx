import styles from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.profileImage} src={image} alt={tag} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statItem}>
          <span className={styles.firstChild}>Followers</span>
          <span className={styles.lastChild}>{stats.followers}</span>
        </li>
        <li className={styles.statItem}>
          <span className={styles.firstChild}>Views</span>
          <span className={styles.lastChild}>{stats.views}</span>
        </li>
        <li className={styles.statItem}>
          <span className={styles.firstChild}>Likes</span>
          <span className={styles.lastChild}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
