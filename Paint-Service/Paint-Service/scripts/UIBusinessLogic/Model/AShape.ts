abstract class AShape {
    public _initalX : number;
    public _initalY: number;

    constructor(initalX: number, initalY: number) {
        this._initalX = initalX;
        this._initalY = initalY;
    }

    abstract update(x: number, y: number);
    abstract draw(context);

} 