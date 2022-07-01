interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  age: number;
  friends: Types.ObjectId[];
}

export default IUser;
