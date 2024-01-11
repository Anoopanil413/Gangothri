export default function userRepository(repository) {
<<<<<<< HEAD
    const add = (user) => repository.addUser(user);

    return {
      add
    };
    
=======
    const findByProperty = (params) => repository.findByProperty(params);
    const countAll = (params) => repository.countAll(params);
    const findById = (id) => repository.findById(id);
    const add = (user) => repository.addUser(user);
    const deleteById = (id) => repository.deleteById(id);
  
    return {
      findByProperty,
      countAll,
      findById,
      add,
      deleteById
    };
>>>>>>> a3bb25df88ddef2faf36c1941eeb905007e47554
  }