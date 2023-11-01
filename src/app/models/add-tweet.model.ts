export interface AddTweetRequestModel {
  tweetText: string;
  userId:    string;
}

export class AddTweetResponseModel {
  tweetText?:     string;
  userId?:        string;
  tweetId?:       string;
  tweetComments?: string[];
  likeCount?:     number;
  tweetTime?:     Date;
}


