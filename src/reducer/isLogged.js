// const loggedReducer = (state = false, action) => {
//   switch (action.type) {
//     case "SIGN_IN":
//       return !state;

//     default:
//       return state;
//   }
// };

const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return !state;
    case "SIGN_OUT":
      return !state;
    default:
      return state;
  }
};
export default loggedReducer;

// const loggedReducer = (state = true) => {
//   return !state;
// };

// export default loggedReducer;

//export default loggedReducer;
