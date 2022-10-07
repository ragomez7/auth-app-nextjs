import React, { useContext, useEffect } from "react";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import KeyIcon from "@mui/icons-material/Key";
import Button from "@mui/material/Button";
import { ThemeOptions } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Layout from "../../components/Layout";
import { ModeContext } from "../_app";
import AuthProvidersBox from "../../components/LoginComponents/AuthProvidersBox";
import { useMediaQuery } from "usehooks-ts";
import styled, { css } from "styled-components";

const FirstLevelBox = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const SecondLevelBox = styled.div`
  width: 459px;
  height: 584.3px;
  border: 1px solid #bdbdbd;
  border-radius: 2.4;
  padding: 93px 57px 0px 57px;
`;

const RouteGuard = ({ children }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  useEffect(() => {
    if (session) {
      router.push({
        pathname: "/",
        query: { returnUrl: router.asPath },
      });
    }
  }, []);

  return children;
};
export default function SignIn({ providers }) {
  console.log(providers);
  const theme: ThemeOptions = useTheme();
  const { isLight } = useContext(ModeContext);

  return (
    <Layout>
      <RouteGuard>
        <FirstLevelBox>
          <SecondLevelBox>
            <Typography
              sx={{
                width: "319px",
                fontSize: 18,
                color: isLight ? theme?.colors?.black : theme.colors?.white,
              }}
            >
              This is a simple authentication app done in NextJS, React and
              Prisma.
            </Typography>
            <Typography
              sx={{
                width: "349px",
                marginTop: 1.5,
                fontSize: 16,
                fontWeight: 400,
                lineHeight: 1.3,
                color: "#BBB5BD",
              }}
            >
              Nothing in this world is harder than speaking the truth, nothing
              easier than flattery. — F. Dostoevsky
            </Typography>
            <TextField
              placeholder="Email"
              InputProps={{
                sx: {
                  marginTop: "35px",
                  width: "357px",
                  height: "48px",
                  color: isLight ? theme?.colors?.black : theme?.colors?.white,
                  border: `1px solid ${theme?.colors?.grey}`,
                },
                startAdornment: (
                  <MailOutlineIcon
                    sx={{
                      padding: 0,
                      paddingRight: 1,
                    }}
                  />
                ),
              }}
            />

            <TextField
              placeholder="Password"
              InputProps={{
                sx: {
                  marginTop: "16px",
                  width: "357px",
                  height: "48px",
                  color: isLight ? theme?.colors?.black : theme?.colors?.white,
                  border: `1px solid ${theme?.colors?.grey}`,
                },
                startAdornment: (
                  <KeyIcon
                    sx={{
                      padding: 0,
                      paddingRight: 1,
                    }}
                  />
                ),
              }}
            />
            <Button
              variant="outlined"
              sx={{
                color: "black",
                textTransform: "none",
                marginTop: "22px",
                width: "357px",
                height: "48px",
              }}
            >
              Sign-up
            </Button>
            <Typography
              sx={{
                width: "218px",
                height: "19px",
                fontWeight: 400,
                fontSize: "14px",
                marginTop: "31px",
                marginLeft: "130px",
                color: "#828282",
              }}
            >
              or continue with
            </Typography>
            <AuthProvidersBox providers={providers} />
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                marginTop: "45px",
                marginLeft: "95px",
                color: "#828282",
              }}
            >
              Already a member? Login
            </Typography>
          </SecondLevelBox>
        </FirstLevelBox>
      </RouteGuard>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
