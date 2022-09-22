var CanvasContext = /** @class */ (function () {
    function CanvasContext(context, canvas) {
        this._context = context;
        this._canvas = canvas;
    }
    Object.defineProperty(CanvasContext.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CanvasContext.prototype, "canvas", {
        get: function () {
            return this._canvas;
        },
        enumerable: false,
        configurable: true
    });
    CanvasContext.prototype.rect = function (x, y, width, height) {
        this.context.beginPath();
        this.context.rect(x, y, width, height);
        this.context.strokeStyle = 'black';
        this.context.lineWidth = 2;
        this.context.stroke();
    };
    CanvasContext.prototype.circle = function (initalX, initalY, x, y) {
        this.context.beginPath();
        this.context.moveTo(initalX, initalY + (y - initalY) / 2);
        this.context.bezierCurveTo(initalX, initalY, x, initalY, x, initalY + (y - initalY) / 2);
        this.context.bezierCurveTo(x, y, initalX, y, initalX, initalY + (y - initalY) / 2);
        this.context.stroke();
    };
    CanvasContext.prototype.line = function (initalX, initalY, x, y) {
        this.context.beginPath();
        this.context.moveTo(initalX, initalY);
        this.context.lineTo(x, y);
        this.context.strokeStyle = 'black';
        this.context.lineWidth = 2;
        this.context.lineJoin = this.context.lineCap = 'round';
        this.context.stroke();
    };
    CanvasContext.prototype.clear = function () {
        this.context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    };
    CanvasContext.prototype.getMousePosition = function (initalX, initalY) {
        var rect = this._canvas.getBoundingClientRect(), scaleX = this._canvas.width / rect.width, scaleY = this._canvas.height / rect.height;
        return {
            x: (initalX - rect.left) * scaleX,
            y: (initalY - rect.top) * scaleY
        };
    };
    return CanvasContext;
}());
//# sourceMappingURL=CanvasContext.js.map