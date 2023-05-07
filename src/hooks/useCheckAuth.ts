import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useCheckUser } from "./useCheckUser";
import { useAccount } from "wagmi";
import { verifyToken } from "../LENS_API";

export function useCheckAuth() {

  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { user } = useCheckUser();
  const  account  = useAccount();
  const router = useRouter();

  const checkToken = async () => {
    const token = window.localStorage.getItem("accessToken");

    setIsAuthenticated(false);
    
    if (token) {
        const result = await verifyToken(token);
    
        if (!result) {
            console.log("Token is expired or invalid");
            router.push("/");
            setIsLoading(false);
            setIsAuthenticated(false);
        }
        
        if (account?.address === user?.walletAddress) {
            console.log("Token is valid")
            setIsAuthenticated(true);
            setIsLoading(false);
        }
    }
    else{
        router.push("/");
        setIsLoading(false);
        setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkToken();
  });

  return { isAuthenticated, isLoading};
}