import { BehaviorSubject } from "rxjs";

export class AppService{
    constructor(){}
    private bgInit = '/assets/Resources/fondo.jpg';
    bgPath: BehaviorSubject<string> = new BehaviorSubject(this.bgInit);
}