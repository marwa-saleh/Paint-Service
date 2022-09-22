class CanvasContext implements IContext {

    public _context: any;
    public _canvas: any;

    constructor(context: any, canvas: any) {
        this._context = context;
        this._canvas = canvas;
    }

    public get context() {
        return this._context;
    }

    public get canvas() {
        return this._canvas;
    }

    rect(x: number, y: number, width: number, height: number) {
        this.context.beginPath();
        this.context.rect(x, y, width, height);
        this.context.strokeStyle = 'black';
        this.context.lineWidth = 2;
        this.context.stroke();
    }

    circle(initalX: number, initalY: number, x: number, y: number) {
        this.context.beginPath();
        this.context.moveTo(initalX, initalY + (y - initalY) / 2);
        this.context.bezierCurveTo(initalX, initalY, x, initalY, x, initalY + (y - initalY) / 2);
        this.context.bezierCurveTo(x, y, initalX, y, initalX, initalY + (y - initalY) / 2);
        this.context.stroke();
    }

    line(initalX: number, initalY: number, x: number, y: number) {
        this.context.beginPath();
        this.context.moveTo(initalX, initalY);
        this.context.lineTo(x, y);
        this.context.strokeStyle = 'black';
        this.context.lineWidth = 2;
        this.context.lineJoin = this.context.lineCap = 'round';
        this.context.stroke();
    }

    clear() {
        this.context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

     getMousePosition(initalX: number, initalY: number) {
        let rect = this._canvas.getBoundingClientRect(),
            scaleX = this._canvas.width / rect.width,
            scaleY = this._canvas.height / rect.height;

        return {
            x: (initalX - rect.left) * scaleX,
            y: (initalY - rect.top) * scaleY
        }
    }
}