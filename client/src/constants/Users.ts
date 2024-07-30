enum status {
  "ACTIVE",
  "INACTIVE",
}

interface User {
  id: number;
  firstname: string;
  lastname: string;
  emailAddress: string;
  password: string;
  phoneNumber: number;
  username: string;
  status: status;
}

export default User;
