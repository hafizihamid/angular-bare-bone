export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: any;
    created_at: Date;
    updated_at: Date;
    is_disabled: number;
    blocked_until?: any;
    tries: number;
    roles: string[];
    permissions: string[];
}

export interface UserData {
    user: User;
    accessToken: string;
}
