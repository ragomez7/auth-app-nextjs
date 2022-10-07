import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ThemeOptions } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ModeContext } from "../pages/_app";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();
  const theme: ThemeOptions = useTheme();
  const { isLight, setIsLight } = useContext(ModeContext);

  const Right = () => {
    if (status === "loading") {
      return (
        <div className="right">
          <p>Validating session ...</p>
          <style jsx>{`
            .right {
              margin-left: auto;
            }
          `}</style>
        </div>
      );
    }
    if (session) {
      return (
        <div className="right">
          <Link href="/profile">
            <Button>
              {session?.user?.name} ({session?.user?.email})
            </Button>
          </Link>
          <style jsx>{`
            a {
              text-decoration: none;
              color: var(--geist-foreground);
              display: inline-block;
            }

            p {
              display: inline-block;
              font-size: 13px;
              padding-right: 1rem;
            }

            a + a {
              margin-left: 1rem;
            }

            .right {
              margin-left: auto;
            }

            .right a {
              border: 1px solid var(--geist-foreground);
              padding: 0.5rem 1rem;
              border-radius: 3px;
            }

            button {
              border: none;
            }
          `}</style>
        </div>
      );
    } else {
      return (
        <div className="right">
          <style jsx>{`
            a {
              text-decoration: none;
              color: var(--geist-foreground);
              display: inline-block;
            }

            a + a {
              margin-left: 1rem;
            }

            .right {
              margin-left: auto;
            }

            .right a {
              border: 1px solid var(--geist-foreground);
              padding: 0.5rem 1rem;
              border-radius: 3px;
            }
          `}</style>
        </div>
      );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "32px",
        padding: "0px 30px",
        backgroundColor: isLight ? theme?.colors?.white : theme?.colors?.black,
      }}
    >
      <Button onClick={() => setIsLight(!isLight)}>
        {isLight ? "Dark Mode" : "Light Mode"}
      </Button>
      <Right />
    </Box>
  );
};

export default Header;
