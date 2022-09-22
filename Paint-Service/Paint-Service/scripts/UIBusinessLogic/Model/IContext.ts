interface IContext {

    rect(x: number, y: number, width: number, height: number);
    circle(initalX: number, initalY: number, x: number, y: number);
    line(initalX: number, initalY: number, x: number, y: number);
    getMousePosition(initalX: number, initalY: number);
    clear();
}