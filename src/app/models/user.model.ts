

export interface User{
  name: string,
  lastname: string,
  email: string,
  cellphone: string,
  password: string,
  type?: string
}



export interface ResponseU{
  message: string,
  data: [
      {
          user_id: number,
          email: string,
          role: string,
          name: string,
          lastname: string,
          cellphone: string
      }
  ]
}


