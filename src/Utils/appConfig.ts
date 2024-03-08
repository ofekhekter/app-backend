
type AppConfig = {
    user: string;
    password: string;
    server: string;
    database: string;
    port: number;
    options: { encrypt: boolean };
}

export const appConfig: AppConfig = {
    user: 'ofek',
    password: 'Ofek1989',
    server: 'localhost',
    database: 'myProject',
    port: 57885,
    options: {
        encrypt: false
    }
}
