export default function userRepository(repository) {
    const add = (user) => repository.add(user);
    return {
      add
    };
  }