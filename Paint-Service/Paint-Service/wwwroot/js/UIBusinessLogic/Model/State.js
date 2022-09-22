var IntialState = /** @class */ (function () {
    function IntialState() {
    }
    IntialState.prototype.MouseUp = function (x, y) {
        return this;
    };
    IntialState.prototype.MouseDown = function (x, y) {
        return this;
    };
    IntialState.prototype.MouseMove = function (x, y) {
        return this;
    };
    return IntialState;
}());
var ShapeState = /** @class */ (function () {
    function ShapeState(name) {
        this._shapeName = name;
    }
    ShapeState.prototype.MouseDown = function (x, y) {
        var shapeFactory = new ShapeFactory();
        this._shape = shapeFactory.createShape(this._shapeName, x, y);
        UIController.getInstance().AddShape(this._shape);
        UIController.getInstance().ReDraw();
        return this;
    };
    ShapeState.prototype.MouseMove = function (x, y) {
        if (!this._shape) {
            return this;
        }
        this._shape.update(x, y);
        UIController.getInstance().ReDraw();
        return this;
    };
    ShapeState.prototype.MouseUp = function (x, y) {
        this._shape.update(x, y);
        UIController.getInstance().ReDraw();
        return new ShapeState(this._shapeName);
    };
    return ShapeState;
}());
var SelectState = /** @class */ (function () {
    function SelectState() {
    }
    SelectState.prototype.MouseUp = function (x, y) { return this; };
    SelectState.prototype.MouseDown = function (x, y) { return this; };
    SelectState.prototype.MouseMove = function (x, y) { return this; };
    return SelectState;
}());
//# sourceMappingURL=State.js.map