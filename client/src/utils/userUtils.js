export const filterUsers = (searchString = "", users = []) => {
  let filteredUsers = Array.isArray(users)
    ? users.filter(
        (user) =>
          user &&
          (user.userName?.toLowerCase().includes(searchString.toLowerCase()) ||
            `${user.firstName} ${user.lastName ? user.lastName : ""}`
              .toLowerCase()
              .includes(searchString.toLowerCase()) ||
            `${user.email ? user.email : ""}`
              .toLowerCase()
              .includes(searchString.toLowerCase())),
      )
    : [];

  return filteredUsers;
};
