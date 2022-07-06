import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
import { useAppDispatch } from "../redux/hook";
import { getUserDetails, setUser } from "../redux/reducers/authSlice";

export const useAuthObserver = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.uid));
        dispatch(getUserDetails(user.uid));
        navigate("/");
      } else {
        dispatch(setUser(null));
      }
    });
    return unsub;
  }, []);
};
