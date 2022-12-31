import React from "react";
import Fade from "react-reveal/Fade";
import DeveloperCardNew from "../../components/developercardnew";
import DeveloperHeadNew from "../../components/developerhead";
import Styles from "./developersnew.module.css";

interface DeveloperProps {
  devWing: {
    avatar: { public_id: String };
    socialMedia: [
      { facebook: String; instagram: String; github: String; linkedin: String }
    ];
    _id: String;
    name: String;
    role: String;
    session: String;
    year: String;
  }[];
  coHead: {
    avatar: { public_id: String };
    socialMedia: [
      { facebook: String; instagram: String; github: String; linkedin: String }
    ];
    _id: String;
    name: String;
    role: String;
    session: String;
    year: String;
  }[];
}

const DevelopersNew = ({ devWing, coHead }: DeveloperProps, { mode }: any) => {
  const devCoHeads = coHead.filter((head) => {
    return head.role === "Dev-Wing Co-Head" && head.name !== "Yash Srivastava";
  });
  return (
    <div className={Styles.devpagecontainer}>
      <div className={Styles.heads}>
        <DeveloperHeadNew />
        <DeveloperHeadNew />
        <DeveloperHeadNew />
      </div>
      <div className={Styles.members}>
        <DeveloperCardNew />
        <DeveloperCardNew />
        <DeveloperCardNew />
        <DeveloperCardNew />
      </div>
    </div>
  );
};

export default DevelopersNew;
