const host = 'http://localhost:5000';
export default host;

export const  googleCallbackUrl = `${host}/auth/google`;
export const getUserInfo = `${host}/api/user`
export const signUpUserRoute = `${host}/auth/user/register` 
export const signInUserRoute = `${host}/auth/user/login`
export const getAllUserRoute = `${host}/api/users`

export const sendMessageRoute = `${host}/message/send-message`
export const getAllMessageRoute = `${host}/message/getAllMessage`