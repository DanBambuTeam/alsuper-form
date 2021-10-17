


//login
export interface loginI{
  email: string,
  password: string,
  firebase_token?: string
}

export interface ResponseI{
  jwt: string,
  refresh_token: string,
}


//restore password
export interface emailreqst{
  email: string
}

export interface ResponseRP{
  message: string,
  mail_accepted: boolean
}
