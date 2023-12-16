import { getDecryptedLocalStorage } from "src/helper/EncryptLocalStorage";

export const userHasRole = (roleName: string): boolean => {
  const userData = getDecryptedLocalStorage("user");
  if (userData?.roles?.includes(roleName)) {
    return true;
  }
  return false;
};

export const userHasPermissions = (
  permissionNames?: string[],
  exception?: string[]
): boolean => {
  const userData = getDecryptedLocalStorage("user");

  if (!userData) {
    return false;
  }

  if (userData?.roles?.includes("super admin")) {
    if (exception?.some((exc) => exc === "super admin")) return false;
    return true;
  }

  const hasExcepted = exception?.some((exc) => userData?.roles?.includes(exc));

  const hasPermission = permissionNames?.some((permission) =>
    userData?.permissions?.includes(permission)
  );

  return hasPermission || (exception?.length && !hasExcepted) || false;
};
