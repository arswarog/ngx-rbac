export interface RbacRules {
    [key: string]: RbacRule;
}

export interface RbacConfig {
    defaultRoles?: string[];
    debug?: boolean;
}

export interface RbacRule {
    base?: boolean;
    children?: string[];
}
