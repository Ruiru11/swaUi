export interface IPeopledata {
    count:number;
    next:string | null;
    previous?:string | null;
    results:Result[]

}

export type Result = {
    name:string,
    height:string,
    mass:string,
    color:string,
    eye_color:string,
    skin_color:string,
    birthyear:string,
    gender:string,
    homeworld:string,
    files:string[],
    species:string[],
    vehicles:string[],
    starships:string[],
    created:string,
    edited:string,
    url:string,
}
