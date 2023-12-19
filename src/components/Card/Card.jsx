import React from "react";
import styles from "./Card.module.css";
import { Tooltip } from "@mui/material";
import Chip from "@mui/material/Chip";

export default function Card({ data, type }) {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { likes, image, title, follows, slug, songs } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img
                  src="https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                  alt="song"
                  loading="lazy"
                  width={160}
                />
                <div className={styles.banner}>
                  <Chip
                    lable={`${follows} Follows`}
                    size="small"
                    className={styles.chip}
                  />
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>title</p>
              </div>
            </div>
          </Tooltip>
        );
      }
      case "song": {
        const { likes, image, title } = data;
        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img
                src="https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                alt="song"
                loading="lazy"
                width={160}
              />
              <div className={styles.banner}>
                <div className={styles.pill}>Likes 100</div>
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>title</p>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };

  return getCard(type);
}
