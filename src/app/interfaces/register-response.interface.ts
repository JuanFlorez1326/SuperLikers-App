export interface RegisterResponse {
    ok:         string;
    errors:     Errors;
    message:    string;
    code_error: number;
}

export interface Errors {
    "Número del Cliente ": string;
    Email:                 string;
}
