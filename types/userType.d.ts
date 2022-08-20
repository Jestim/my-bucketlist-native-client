export interface IFriendRequest {
  requester: Types.ObjectId;
  recipient: Types.ObjectId;
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
