export interface RepositoryApiInterface {
    id: string,
    name: string,
    html_url: LinkStyle,
    language: string
    created_at: string
}

export interface UserProfileApiInterface {
    login: string;
    name: string;
    bio: string;
    followers: number;
    following: number;
    avatar_url: string;
  }

export interface ApiErrorInterface {
    isError: boolean,
    errorCode: number,
    errorMessage: string 
}

export interface GistFile {
    filename: string;
    language: string;
    content: string;
  }
  
  export interface Gist {
    id: string;
    description: string;
    files: { [filename: string]: GistFile };
  }