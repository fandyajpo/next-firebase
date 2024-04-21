export enum ECol {
  Portofolio = "PORTOFOLIO",
  Role = "ROLE",
  Tag = "TAG",
  User = "USER",
  Contact_Us = "CONTACT_US",
}

export enum EQKey {
  Portofolio = "Portofolio",
  Role = "Role",
  Tag = "Tag",
  User = "User",
}

export enum EPermission {
  ADMINISTRATOR = 1,
  MEMBER = 0,
}

export enum ERouteSegment {
  Slash = "",
  NotFound = "/_not-found",
  General = "(general)",
  Auth = "(auth)",
  Backend = "(backend)",
}

export enum EPermissionField {
  ADMINISTRATOR = 4,
  MANAGE_TENANT = 3,
  MANAGE_PROJECT = 2,
  MANAGE_USER = 1,
  READ = 0,
}
