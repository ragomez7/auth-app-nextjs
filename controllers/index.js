export const updateData = async () => {
    try {
      const body = {
        profileName,
        profileBio,
        profilePhone,
        profileEmail,
        profilePassword,
        image,
      };
      await fetch("/api/user/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }
  };
