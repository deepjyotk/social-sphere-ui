export class RegisterRequestModel {
    constructor(
      public firstName?: string,
      public lastName?: string,
      public gender?: string,
      public dob?: string,
      public emailId?: string,
      public password?: string,
      public photoProfile?: string,

    ) {}
  }

  export class UserInfoResponseModel {
    firstName?:    string;
    lastName?:     string;
    gender?:       string;
    dob?:          string;
    emailId?:      string;
    password?:     string;
    photoProfile?: string;
    token?:        string;
    userId?:       string;
}
