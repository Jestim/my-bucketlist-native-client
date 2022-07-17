export interface IFriendRequest {
  userId: Types.ObjectId;
  status: 'pending' | 'rejected';
}

interface IUser {
  id: Types.ObjectId;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  name: string;
  age: number;
  friends: Types.ObjectId[];
  friendRequests: IFriendRequest[];
}

export default IUser;
