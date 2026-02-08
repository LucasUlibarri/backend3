export default class UserDTO {
    static getUserTokenFrom = (user) => {
        return{
            name: `${user.first_name} ${user.last_name}`,
            email: user.email,
            role: user.role
        }
    }
}