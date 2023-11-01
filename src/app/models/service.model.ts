import { AddTweetResponseModel } from "./add-tweet.model";
import { GetTweetBySpecificUserModel } from "./get-tweet-specific-user.model";

export interface Service {
  result?:                  AddTweetResponseModel | GetTweetBySpecificUserModel[] | boolean;
  id?:                      number;
  exception?:               null;
  status?:                  number;
  isCanceled?:              boolean;
  isCompleted?:             boolean;
  isCompletedSuccessfully?: boolean;
  creationOptions?:         number;
  asyncState?:              null;
  isFaulted?:               boolean;
}
