export interface KpisResponse {
    ok:   string;
    data: Data;
}

export interface Data {
    previous_page_token: number;
    next_page_token:     number;
    entries:             Entry[];
}

export interface Entry {
    activity_count: number;
    category:       string;
    created_at:     Date;
    moderation:     string;
    points:         number;
    state:          string;
    id:             string;
    slug:           string;
    name:           string;
    participant:    Participant;
    as_form:        boolean;
    data:           { [key: string]: string };
}

export interface Participant {
    name:  string;
    id:    string;
    uid:   string;
    email: string;
}
