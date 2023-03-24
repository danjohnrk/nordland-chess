import { TwitterTimelineEmbed } from "react-twitter-embed";
import styles from "./TwitterFeed.module.css";

export const TwitterFeed = () => {
  return (
    <div className={styles.tweet}>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="Sjakkforbundet"
        options={{ theme: "dark" }}
        noHeader={true}
        tweetLimit={5}
      />
    </div>
  );
};
