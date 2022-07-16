import IUser from '../../types/userType';
import { CurrentUser } from '../../types/ContextTypes';

export const friendWithoutFriends: IUser = {
  id: '62c7f68014dda82355f1d31d',
  username: 'friend',
  email: 'f@test.com',
  password: '$2a$10$g/V.KIRHZfRg./GGJw.Ke.X1198UJUkX7FatndWnuMU7G44Nolap6',
  firstName: 'f',
  lastName: 'f',
  name: 'f f',
  age: 100,
  friends: [],
  friendRequests: [],
};

export const userState: CurrentUser = {
  userId: '62c7f65714dda82355f1d319',
  jwtToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmM3ZjY1NzE0ZGRhODIzNTVmMWQzMTkiLCJpYXQiOjE2NTc4NzQ5NjU0MjUsImV4cCI6MTY1ODQ3OTc2NTQyNX0.2HeB6uu5SyPz2p3_ui3ue_cHI8jXnntHLIhQQeWfGfY',
  jwtExp: '1658479765425',
  isLoggedIn: true,
};
