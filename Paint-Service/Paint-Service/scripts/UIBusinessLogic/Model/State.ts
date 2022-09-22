class IntialState implements IState {
    MouseUp(x: number, y: number) {
        return this;
    }
    MouseDown(x: number, y: number) {
        return this;
    }
    MouseMove(x: number, y: number) {
        return this;
    }

}
class ShapeState implements IState {
    private _shape: AShape;
    private _shapeName: ActionEnum;

    constructor(name) {
        this._shapeName = name;      
    }

    MouseDown(x: number, y: number) {
        const shapeFactory = new ShapeFactory();
        this._shape = shapeFactory.createShape(this._shapeName, x, y);
        UIController.getInstance().AddShape(this._shape);
        UIController.getInstance().ReDraw();
        return this;
    }

    MouseMove(x: number, y: number) {
        if (!this._shape) { return this}
        this._shape.update(x, y);
        UIController.getInstance().ReDraw();
        return this;
    }

    MouseUp(x: number, y: number) {
        this._shape.update(x, y);
        UIController.getInstance().ReDraw();
        return new ShapeState(this._shapeName);
    }


}

class SelectState implements IState {

    MouseUp(x: number, y: number) { return this; }
    MouseDown(x: number, y: number) { return this; }
    MouseMove(x: number, y: number) { return this; }
}

