var UIController = /** @class */ (function () {
    function UIController() {
        this._currentState = new IntialState();
        this._shapes = new Array();
    }
    UIController.getInstance = function () {
        if (!UIController.instance) {
            UIController.instance = new UIController();
        }
        return UIController.instance;
    };
    UIController.prototype.SelectAction = function (action) {
        var stateFactory = new StateFactory();
        this._currentState = stateFactory.createState(action);
    };
    UIController.prototype.SetContexWrapper = function (contextWrapper) {
        this._contextWrapper = contextWrapper;
    };
    UIController.prototype.GetContextWrapper = function () {
        return this._contextWrapper;
    };
    UIController.prototype.AddShape = function (shape) {
        this._shapes.push(shape);
    };
    UIController.prototype.MouseDown = function (x, y) {
        this._currentState = this._currentState.MouseDown(x, y);
    };
    UIController.prototype.MouseMove = function (x, y) {
        this._currentState = this._currentState.MouseMove(x, y);
    };
    UIController.prototype.MouseUp = function (x, y) {
        this._currentState = this._currentState.MouseUp(x, y);
    };
    UIController.prototype.ReDraw = function () {
        this._contextWrapper.clear();
        for (var index in this._shapes) {
            var shape = this._shapes[index];
            shape.draw(this._contextWrapper);
        }
    };
    return UIController;
}());
//# sourceMappingURL=UIController.js.map