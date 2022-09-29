import React, { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Typography from "@mui/material/Typography";
import useSWR from "swr";
import ProfileViewPage from "../../components/ProfileComponents/view";
import ProfileEditPage from "../../components/ProfileComponents/edit";

import Layout from "../../components/Layout";

type UserProps = {
  id?: string;
  name: string;
  email: string;
  image: string;
  bio: string;
  phone: string;
  password: string;
};

const fetcher = (...args: any) => fetch(args).then((res) => res.json());
type emailType = string | null | undefined;
function useUser(email: emailType) {
  const { data, error } = useSWR(`/api/user/get?email=${email}`, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

const ProfileIndexPage = () => {
  const [userData, setUserData] = useState<UserProps>({
    name: "",
    image: "",
    bio: "",
    phone: "",
    email: "",
    password: "",
  });
  interface fetchStateProps {
    status: string;
    errorMessage: string | null;
  }
  const [apiFetchState, setApiFetchState] = useState<fetchStateProps>({
    status: "loading",
    errorMessage: null,
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const theSession = useSession();

  const { data: session, status } = theSession;

  console.log(theSession);


  const email: emailType = session?.["user"] && session?.["user"]["email"];
  const { user, isLoading, isError } = useUser(email);

  useEffect(() => {
    if (user) {
      setUserData({
        name: user.name,
        image: user.image,
        bio: user.bio,
        phone: user.phone,
        email: user.email,
        password: user.password,
      });
    }
  }, [user]);

  if (isError) {
    return <Typography>{isError.errorMessage}</Typography>;
  }

  if (isLoading) {
    return <Typography>Loading</Typography>;
  }

  if (!isError && !isLoading) {
    return (
      <Layout>
        {!isEditing ? (
          <ProfileViewPage
            name={userData.name}
            image={userData.image}
            bio={userData.bio}
            phone={userData.phone}
            email={userData.email}
            password={userData.password}
            setIsEditing={setIsEditing}
          />
        ) : (
          <ProfileEditPage
            name={userData.name}
            image={userData.image}
            bio={userData.bio}
            phone={userData.phone}
            email={userData.email}
            password={userData.password}
            setIsEditing={setIsEditing}
            setUserData={setUserData}
          />
        )}
      </Layout>
    );
  }
};

export default ProfileIndexPage;
