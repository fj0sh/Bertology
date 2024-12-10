import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Cookies from "universal-cookie";

const useProtect = () => {
  const router = useRouter();
  const cookies = new Cookies();

  useEffect(() => {
    const jwtAuthCookie = cookies.get("jwt_auth");

    if (!jwtAuthCookie) {
      router.push("/login");
    }
  }, [router]); // Only run on mount
};

export default useProtect;
