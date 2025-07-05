export interface AllParticipants {
    ok:   string;
    data: Data;
}

export interface Data {
    previous_page_token: number;
    next_page_token:     number;
    participants:        ParticipantList[];
}

export interface ParticipantList {
    uid:                   string;
    name:                  string;
    email:                 string;
    cellphone:             string;
    points:                number;
    total_points:          number;
    state:                 State;
    bad_email:             boolean;
    email_verified:        boolean;
    cellphone_verified:    boolean;
    unconfirmed_email:     boolean;
    unconfirmed_cellphone: boolean;
    created_at:            Date;
    updated_at:            Date;
}

export enum State {
    Active = "active",
}
