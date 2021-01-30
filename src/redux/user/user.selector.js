import { createSelector } from "reselect";

// we need to get the current user
const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
