interface IGoal {
  id: string;
  title: string;
  description: string;
  location: string;
  sharedWith: string[];
  isPrivate: boolean;
  isCrossedOff: boolean;
  crossedOffAt: Date;
  creator: string;
}

export default IGoal;
