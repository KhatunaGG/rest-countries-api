export interface ICountries {
    name: string;
    topLevelDomain?: string;
    flags: {
        svg: string;
    };
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    subregion?: string;
    region: string;
    population: number;
    currencies: string[];
    nativeName?: string;
    languages: string[];
    borders: string[];
}[]



