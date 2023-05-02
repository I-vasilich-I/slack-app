import { AppType, AppUser } from "./types";

// could store that info in some DB if it makes sense
export const usersDB = new Map<string, AppUser>();