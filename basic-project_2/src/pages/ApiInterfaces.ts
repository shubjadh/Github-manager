export interface RepositoryApiInterface {
    id: string,
    name: string,
    html_url: LinkStyle,
    language: string
    created_at: string
}

export interface ApiErrorInterface {
    isError: boolean,
    errorCode: number,
    errorMessage: string 
}