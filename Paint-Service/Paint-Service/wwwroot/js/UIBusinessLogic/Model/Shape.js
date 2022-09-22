var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ShapeFactory = /** @class */ (function () {
    function ShapeFactory() {
    }
    ShapeFactory.prototype.createShape = function (name, initalX, initalY) {
        if (name == ActionEnum.Circle) {
            return new Circle(initalX, initalY);
        }
        else if (name == ActionEnum.Rectangle) {
            return new Rectangle(initalX, initalY);
        }
        else if (name == ActionEnum.Line) {
            return new Line(initalX, initalY);
        }
        return null;
    };
    return ShapeFactory;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.update = function (x, y) {
        this._width = x - this._initalX;
        this._height = y - this._initalY;
    };
    Rectangle.prototype.draw = function (ctx) {
        ctx.rect(this._initalX, this._initalY, this._width, this._height);
    };
    return Rectangle;
}(AShape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.update = function (x, y) {
        this._x = x;
        this._y = y;
    };
    Circle.prototype.draw = function (ctx) {
        ctx.circle(this._initalX, this._initalY, this._x, this._y);
    };
    return Circle;
}(AShape));
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    function Line() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Line.prototype.update = function (x, y) {
        this._x = x;
        this._y = y;
    };
    Line.prototype.draw = function (ctx) {
        ctx.line(this._initalX, this._initalY, this._x, this._y);
    };
    return Line;
}(AShape));
//# sourceMappingURL=Shape.js.map