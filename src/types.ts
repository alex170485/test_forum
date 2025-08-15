export type ValueOf<T> = T[keyof T];

export const USER_STATUS_MAP = {
  BLOCK: 'block',
  ACTIVE: 'active',
} as const;

export type UserStatusType = ValueOf<typeof USER_STATUS_MAP>;

export const USER_ROLE_MAP = {
  ADMIN: 'admin',
  USER: 'user',
} as const;

export type UserRoleType = ValueOf<typeof USER_ROLE_MAP>;

export type UserType = {
  firstName: string;
  middleName?: string;
  lastName: string;
  status: UserStatusType;
  role: UserRoleType;
  nickname?: string;
  avatarUrl?: string;
  description?: string;
};
