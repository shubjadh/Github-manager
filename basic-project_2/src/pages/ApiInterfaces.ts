export interface RepositoryApiInterface {
    RepositoryId: string,
    RepositoryName: string,
    RepositoryDescription: string
}

export interface ApiErrorInterface {
    isError: boolean,
    errorCode: number,
    errorMessage: string 
}