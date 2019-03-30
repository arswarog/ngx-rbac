export interface RbacRules {
    [key: string]: RbacRule;
}

export interface RbacConfig {
    defaultRoles?: string[];
}

export interface RbacRule {
    base?: boolean;
    children?: string[];
}
