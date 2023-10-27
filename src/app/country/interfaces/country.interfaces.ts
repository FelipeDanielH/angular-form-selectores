export interface Country {
  name:         Name;
  tld?:         string[];
  cca2:         string;
  ccn3?:        string;
  cca3:         string;
  cioc?:        string;
  independent?: boolean;
  status:       Status;
  unMember:     boolean;
  currencies?:  Currencies;
  idd:          Idd;
  capital?:     string[];
  altSpellings: string[];
  region:       Region;
  subregion?:   string;
  languages?:   { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms?:    Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   Continent[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side:   Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  UZS?: Aed;
  EUR?: Aed;
  SLL?: Aed;
  AUD?: Aed;
  MRU?: Aed;
  ILS?: Aed;
  MDL?: Aed;
  FJD?: Aed;
  RSD?: Aed;
  XAF?: Aed;
  BSD?: Aed;
  USD?: Aed;
  CZK?: Aed;
  EGP?: Aed;
  MMK?: Aed;
  UYU?: Aed;
  GBP?: Aed;
  SHP?: Aed;
  COP?: Aed;
  KGS?: Aed;
  MWK?: Aed;
  HUF?: Aed;
  CVE?: Aed;
  ZAR?: Aed;
  DKK?: Aed;
  XPF?: Aed;
  SRD?: Aed;
  XOF?: Aed;
  TOP?: Aed;
  GIP?: Aed;
  CAD?: Aed;
  KPW?: Aed;
  TVD?: Aed;
  PAB?: Aed;
  RWF?: Aed;
  JMD?: Aed;
  BHD?: Aed;
  ANG?: Aed;
  PKR?: Aed;
  KZT?: Aed;
  LAK?: Aed;
  TTD?: Aed;
  NZD?: Aed;
  LRD?: Aed;
  XCD?: Aed;
  PGK?: Aed;
  CLP?: Aed;
  SAR?: Aed;
  NOK?: Aed;
  GMD?: Aed;
  PHP?: Aed;
  IMP?: Aed;
  HNL?: Aed;
  LBP?: Aed;
  MAD?: Aed;
  FOK?: Aed;
  ARS?: Aed;
  NAD?: Aed;
  VND?: Aed;
  MZN?: Aed;
  AMD?: Aed;
  KES?: Aed;
  BTN?: Aed;
  INR?: Aed;
  AED?: Aed;
  CKD?: Aed;
  ETB?: Aed;
  SGD?: Aed;
  PEN?: Aed;
  JOD?: Aed;
  WST?: Aed;
  SSP?: Aed;
  SZL?: Aed;
  TJS?: Aed;
  ZMW?: Aed;
  BIF?: Aed;
  JPY?: Aed;
  UGX?: Aed;
  MNT?: Aed;
  NGN?: Aed;
  GTQ?: Aed;
  JEP?: Aed;
  CRC?: Aed;
  YER?: Aed;
  MGA?: Aed;
  DZD?: Aed;
  LKR?: Aed;
  BMD?: Aed;
  MKD?: Aed;
  NPR?: Aed;
  CHF?: Aed;
  CDF?: Aed;
  BZD?: Aed;
  QAR?: Aed;
  IDR?: Aed;
  LSL?: Aed;
  PLN?: Aed;
  GGP?: Aed;
  TWD?: Aed;
  HKD?: Aed;
  TMT?: Aed;
  RUB?: Aed;
  AZN?: Aed;
  KHR?: Aed;
  BWP?: Aed;
  PYG?: Aed;
  BOB?: Aed;
  MVR?: Aed;
  ISK?: Aed;
  BND?: Aed;
  AFN?: Aed;
  GHS?: Aed;
  KWD?: Aed;
  BDT?: Aed;
  GYD?: Aed;
  KID?: Aed;
  BBD?: Aed;
  ALL?: Aed;
  MOP?: Aed;
  SCR?: Aed;
  KRW?: Aed;
  TND?: Aed;
  IRR?: Aed;
  TRY?: Aed;
  TZS?: Aed;
  UAH?: Aed;
  MUR?: Aed;
  SOS?: Aed;
  GNF?: Aed;
  SBD?: Aed;
  NIO?: Aed;
  DOP?: Aed;
  IQD?: Aed;
  VES?: Aed;
  ZWL?: Aed;
  SEK?: Aed;
  THB?: Aed;
  BAM?: BAM;
  FKP?: Aed;
  DJF?: Aed;
  HTG?: Aed;
  KMF?: Aed;
  BYN?: Aed;
  KYD?: Aed;
  CNY?: Aed;
  SDG?: BAM;
  OMR?: Aed;
  MXN?: Aed;
  CUC?: Aed;
  CUP?: Aed;
  ERN?: Aed;
  BGN?: Aed;
  RON?: Aed;
  VUV?: Aed;
  SYP?: Aed;
  STN?: Aed;
  AOA?: Aed;
  AWG?: Aed;
  MYR?: Aed;
  GEL?: Aed;
  LYD?: Aed;
  BRL?: Aed;
}

export interface Aed {
  name:   string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root?:     string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:      string;
  official:    string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Saturday = "saturday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}
