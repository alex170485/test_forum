import { UserType } from '@/types.ts';

export const MOCK_ADMIN_DATA: UserType = {
  firstName: 'Amanda',
  lastName: 'Mackferson',
  status: 'active',
  role: 'admin',
  avatarUrl: 'https://99px.ru/sstorage/1/2025/06/image_10506252105533018831.jpg',
  nickname: 'Mister X',
};

export const MOCK_USER_DATA: UserType = {
  firstName: 'John',
  lastName: 'Smith',
  status: 'active',
  role: 'user',
  avatarUrl: 'https://99px.ru/sstorage/1/2025/06/image_1050625210756539585.jpg',
  nickname: 'John Wick',
};

export const MOCK_ADMIN_EMAIL = 'admin@gmail.com';
export const MOCK_USER_EMAIL = 'user@gmail.com';
