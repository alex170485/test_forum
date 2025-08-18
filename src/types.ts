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

export const USER_LEVEL_MAP = {
  NEW: 'Новичок',
  MIDDLE: 'Писатель',
  SENIOR: 'Бывалый',
};

export const USER_ID_KEY = 'userId';

export type UserLevelType = ValueOf<typeof USER_LEVEL_MAP>;

export type UserType = {
  id: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  status: UserStatusType;
  role: UserRoleType;
  level: UserLevelType;
  nickname?: string;
  avatarUrl?: string;
  description?: string;
};

export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/heic', 'image/webp'];

export const MENU_ITEM_MAP = {
  ALL: 'all',
  PROFILE: 'profile',
  DASHBOARD: 'dashboard',
  MY_FORUM: 'my_forum',
} as const;

export type MenuItemType = ValueOf<typeof MENU_ITEM_MAP>;
