export default function userRepository(repository) {
    const add = (user) => repository.addUser(user);

    return {
      add
    };
    
  }