enum UserRoles {
  admin = "admin",
  editor = "editor",
  viewer = "viewer",
}

const canAccess = (roles: UserRoles) => {
  if (roles === UserRoles.admin || roles === UserRoles.editor) {
    return true;
  } else {
    return false;
  }
};

const access = canAccess(UserRoles.admin);

console.log(access);
