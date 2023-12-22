export const actionTypes = {
  firstName: "FIRTS_NAME",
  lastName: "LAST_NAME",
  age: "AGE",
  resetUser: "RESET_USER",
};

export const reducerUser = (state, action) => {
  switch (action?.type) {
    case actionTypes?.firstName:
      const errF = action?.payload?.length < 3;
      return {
        ...state,
        firstName: {
          val: action?.payload,
          err: errF ? true : false,
          succ: !errF ? true : false,
        },
      };
    case actionTypes?.lastName:
      const errL = action?.payload?.length < 3;
      return {
        ...state,
        lastName: {
          val: action?.payload,
          err: errL ? true : false,
          succ: !errL ? true : false,
        },
      };
    case actionTypes?.age:
      const errA = action?.payload < 3;
      return {
        ...state,
        age: {
          val: action?.payload,
          err: errA ? true : false,
          succ: !errA ? true : false,
        },
      };
    case actionTypes?.resetUser:
      return initialUser;
    default:
      return state;
  }
};

export const initialUser = {
  firstName: { val: "", err: false, succ: false },
  lastName: { val: "", err: false, succ: false },
  age: { val: "", err: false, succ: false },
};
