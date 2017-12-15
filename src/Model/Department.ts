export class Department{
    id: number;
    name: string;
    description:string;
    selected:boolean;

    constructor(id:number, name: string, description: string, selected: boolean) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.selected = selected;
    }
}