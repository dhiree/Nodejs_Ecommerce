export interface UserInterface {
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    password: string,
    role: 'Admin' | 'Customer';
}