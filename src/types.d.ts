export interface FundEntry {
    fundId: number;
    fundName: string;
    serie: string;
    currNav: number;
    rentability: number;
    administratorName: string;
    administratorShortName: string;
}

export interface FundInfo {
    nav: number;
    participants: number;
    patrimony: number;
    date: string;
}

export interface FundAdministrator {
    name: string;
    short_name: string;
}

export interface FundDetail {
    typeText: string;
    id_fund: number;
    name: string;
    serie: string;
    currency: string;
    type: number;
    Administrator: FundAdministrator;
    info: FundInfo;
}