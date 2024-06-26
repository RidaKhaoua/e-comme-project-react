export default (currentState, action) => {
  switch (action.type) {
    case "SHOW__MODAL":
      return { isOpen: true };
    case "CLOSE__MODAL":
      return { isOpen: false };
      default:
        return currentState
  }
};
