import {RootState} from "../store"

export const selectAuth = (store: RootState) => store.auth;
export const selectAuthUserId = (store: RootState) => store.auth.user?.user_id

