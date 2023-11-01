export class GetTweetBySpecificUserModel {
  tweetText?:     string;
  userId?:        string;
  tweetId?:       string;
  tweetComments?: string[];
  likeCount?:     number;
  tweetTime?:     Date | string;
}
