import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const RouteGuard = ({ children }) => {
  const router = useRouter();
  const { data: session } = useSession();
  useEffect(() => {
    if (session) {
      router.push({
        pathname: "/",
        query: { returnUrl: router.asPath },
      });
    }
  }, [session]);

  return children;
};

export default RouteGuard;
