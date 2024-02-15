export interface ICountries {
    name: string;
    topLevelDomain?: string[];
    flags: {
        svg: string;
    };
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    subregion?: string;
    region: string;
    population: number;
    nativeName?: string;
    borders: string[];

    currencies?: {
        code: string;
        name: string;
        symbol: string;
    }[];

    languages?: {
        name: string;
    }[];


}[]


