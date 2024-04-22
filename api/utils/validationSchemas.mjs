export const userValidationSchema = {
  username: {
    notEmpty: {
      errorMessage: "Username cannot be empty!",
    },
    isString: {
      errorMessage: "Username must be a string !",
    },
    isLength: {
      options: {
        min: 3,
        max: 20,
      },
      errorMessage: "Username must be between 3 to 20 characters long",
    },
  },
  password: {
    notEmpty: {
      errorMessage: "Password cannot be empty !",
    },
    isString: {
      errorMessage: "Password must be a string !",
    },
    isLength: {
      options: {
        min: 6,
        max: 20,
      },
      errorMessage: "Password must be between 6 to 20 characters long !",
    },
  },
  displayName: {
    notEmpty: {
      errorMessage: "Display Name cannot be empty !",
    },
    isString: {
      errorMessage: "Display Name must be a string !",
    },
    isLength: {
      options: {
        min: 4,
        max: 20,
      },
      errorMessage: "Display Name must be between 6 to 20 characters long !",
    },
  },
};

export const entryValidationSchema = {
  title: {
    notEmpty: {
      errorMessage: "Title must not be empty !",
    },
    isLength: {
      options: {
        min: 1,
        max: 50,
      },
      errorMessage: "Title must be be less than 50 characters !",
    },
  },
  description: {
    notEmpty: {
      errorMessage: "Description must not be empty !",
    },
    isLength: {
      options: {
        min: 1,
        max: 1000,
      },
      errorMessage: "Description muse be less than 1000 characters !",
    },
  },
  visibility: {
    notEmpty: {
      errorMessage: "Visibility must not by empty !",
    },
    isBoolean: {
      errorMessage: "Visibility must be a Boolean value !",
    },
  },
};
