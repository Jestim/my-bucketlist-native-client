interface IGoal {
  id: string;
  title: string;
  description: string;
  location: string;
  sharedWith: string[];
  isPrivate: boolean;
  isCrossedOff: boolean;
  crossedOffAt: string;
  creator: string;
  createdAt: string;
  updatedAt: string;
}

export default IGoal;
