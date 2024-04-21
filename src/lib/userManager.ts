import { EPermissionField } from "@/types/enums";
import { TUser } from "@/types/types";

export class UserManager {
  public user: TUser;

  constructor(user: TUser) {
    this.user = user;
  }

  hasPermission(p: keyof typeof EPermissionField): boolean {
    const userPermissionValue = Math.max(
      ...this.user.permission.map((permission) => EPermissionField[permission])
    );
    return userPermissionValue >= EPermissionField[p];
  }

  setUsername(u: string) {
    if (typeof u !== "string") return;
    this.user.username = u;
  }

  get username(): string {
    return this.user.username;
  }

  get permission(): Array<keyof typeof EPermissionField> {
    return this.user.permission;
  }

  setPermission(permissions: Array<keyof typeof EPermissionField>) {
    const validPermissions = permissions.every((permission) =>
      Object.values(EPermissionField).includes(permission)
    );

    if (!validPermissions) {
      throw new Error("malformed-permission");
    }

    return (this.user.permission = permissions);
  }
}
