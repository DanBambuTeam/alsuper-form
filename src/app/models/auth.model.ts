export interface Auth{
  acces_token: string;
}


//login
export interface loginI{
  email: string,
  password: string,
  firebase_token?: string
}

export interface ResponseI{
  jwt: string,
  refresh_token: string,
  error?:string
}


//restore password
export interface emailreqst{
  email: string
}

export interface data{
  message: string,
  mail_accepted: boolean
}
