import { cleanEnv, str } from 'envalid';

const env = cleanEnv(process.env, {
    DATABASE_URI: str(),
});

export default env;