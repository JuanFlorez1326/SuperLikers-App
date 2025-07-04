export interface LoginResponse {
    ok:          string;
    token:       string;
    participant: Participant;
    message:     string;
}

export interface Participant {
    _id:      string;
    email:    string;
    name:     string;
    avatar:   string;
    uid:      string;
    uid_type: null;
    state:    string;
}
