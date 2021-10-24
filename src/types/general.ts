
export type UserType = {
    signed?: boolean,
    token: string,
    email: string
}

export type WinnersType = {
    country: string,
    year: number
}


export type AuthContextData = {
    user: UserType,
    winners: WinnersType[],
    deleteUser: () => void,
    saveUser: (obj: UserType) => void
    saveWinners: (obj: WinnersType[]) => void
}

export type RootStackParamList = {
    Login: undefined;
    Champions: undefined;
  };

export type LoginRes = {
    error: boolean,
    token: string,
    message: string
}
