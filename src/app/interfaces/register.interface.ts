export interface Register {
    not_send_verify_registration: boolean;
    campaign:                     string;
    properties:                   Properties;
}

export interface  Properties{
    email:      string;
    fullname:   string;
    code: string;
}
