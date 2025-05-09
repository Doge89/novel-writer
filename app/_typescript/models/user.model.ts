export interface User {
  readonly userId: number;
  readonly userUUID: string;
  username: string;
  firstName: string;
  lastName: string;
  birthDay: Date;
  email: string;
  avatar?: string;
  bio: string;
  gender: Gender;
  pronouns?: string[];
  region: Region;
  isWriter: boolean;
}

export interface UserDto extends Omit<User, 'userId' | 'userUUID' | 'bio' | 'pronouns' | 'avatar' | 'email'> {
  interests: string[];
}

export type Gender = 'M' | 'F';

export type Region = 'MX' | 'US';
