class ShapeFactory {

    public createShape(name: ActionEnum, initalX: number, initalY: number) {
        if (name == ActionEnum.Circle) {
            return new Circle(initalX, initalY);
        } else if (name == ActionEnum.Rectangle) {
            return new Rectangle(initalX, initalY);
        } else if (name == ActionEnum.Line) {
            return new Line(initalX, initalY);
        }
        return null;
    }
}

class Rectangle extends AShape {
    private _width: number;
    private _height: number;

    update(x: number, y: number) {
        this._width = x - this._initalX;
        this._height = y - this._initalY;
    }

    draw(ctx: CanvasContext) {
        ctx.rect(this._initalX, this._initalY, this._width, this._height);
    }
}

class Circle extends AShape {
    private _x: number;
    private _y: number;


    update(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    draw(ctx: CanvasContext) {
        ctx.circle(this._initalX, this._initalY, this._x, this._y);
    }

}

class Line extends AShape {
    private _x: number;
    private _y: number;
 
    update(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    draw(ctx: CanvasContext) {
        ctx.line(this._initalX, this._initalY, this._x, this._y);      
    }
}


