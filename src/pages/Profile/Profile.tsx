import React from "react";
import { auth } from "../../firebase.config";
import { signOut } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import styles from "./profile.module.css";

export const Profile = () => {
  const { userDetails } = useAppSelector((store) => store?.auth);
  const dispatch = useAppDispatch();
  return (
    <div className={`main ${styles.profileContainer} `}>
      <h2 className="text-center">Hello {userDetails?.displayName}</h2>
      <button className="btn" onClick={() => signOut(auth)}>
        Logout
      </button>
    </div>
  );
};
