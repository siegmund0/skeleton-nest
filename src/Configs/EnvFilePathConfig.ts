import EnumEnv from './EnumEnv';

export const envFilePathConfiguration = (): string => {
    console.log(`Environment - ${process.env.SKELETON_ENV}`);
    let envFilePath;
    switch (process.env.SKELETON_ENV) {
        case EnumEnv.LOCAL:
            envFilePath = '.env.local';
            break;
        case EnumEnv.DEV:
            envFilePath = '.env.dev';
            break;
        case EnumEnv.PRODUCTION:
            envFilePath = '.env';
            break;
        default:
            envFilePath = '.env';
    }
    console.log(`envFilePath: ` + envFilePath);
    return envFilePath;
};