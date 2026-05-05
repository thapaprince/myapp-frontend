export interface loginRequest {
email:string,
password:string
}

export interface loginResponse{
accessToken: string;
  data: {
    id: string;
    name: string;
    email:string;
    role:string
  };
}

export interface User{
  id:string,
  name:string,
  lastName:string,
  email:string,
  role:string
}
