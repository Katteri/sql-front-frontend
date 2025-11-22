import { Button } from "@/shared/ui/button/button";
import { Title } from "@/shared/ui/title/title";
import { MenuIcon } from "@/shared/ui/menu/menu-icon";

import { useProfileData } from "./use-profile-data";
import styles from "./profile.module.scss";
import { useMemo } from "react";

const titleFontSizeConfig: Record<number, string>= {
  7: "15vw",
  18: "12vw",
  24: "9vw",
  28: "8vw",
};

const buttonsConfig = [
  {
    text: "данные профиля",
    drawer: "",
  },
  {
    text: "прогресс по задачам",
    drawer: "",
  },
  {
    text: "достижения",
    drawer: "",
  },
]

export const Profile = () => {
  const profileData = useProfileData();

  const titleFontSize = useMemo(() => {
    const length = profileData.login.length;
    const lengths = Object.keys(titleFontSizeConfig).map(Number);

    for (const len of lengths) {
      if (length <= len) {
        return titleFontSizeConfig[len];
      }
    }

    return titleFontSizeConfig[lengths[lengths.length - 1]];
  }, [profileData.login]);

  
  return (
    <section
      className={styles.profile}
    >
      <MenuIcon color="white" onClick={() => {}}/> {/* TODO: add menu drawer on click */}
      <Title
        color="white"
        as="p"
        size={titleFontSize}
        margin="0 0 0 0.7vw"
      >
        {profileData.login}
      </Title>
      <Title
        color="white"
        as="p"
        size="3vw"
        margin="1vw 0 10vw 0"
        letterSpacing="0.1vw"
      >
        <span>баллы: </span>
        <span style={{fontSize: "2.6vw"}}>{profileData.score}</span>
      </Title>
      <div
        className={styles.buttonsBlock}
      >
        {buttonsConfig.map((button) => (
          <Button
            color="white"
            hoverColor="grayMid"
            width="15vw"
            padding="0.7vw"
            textAlign="left"
          >
            {button.text}
          </Button>
        ))}
      </div>
    </section>
  );
};
