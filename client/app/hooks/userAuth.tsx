/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";

export default function userAuth() {
  const { user } = useSelector((state: any) => state.auth);

  if (user) {
    return true;
  } else {
    return false;
  }
}
