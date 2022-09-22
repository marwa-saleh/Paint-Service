var StateFactory = /** @class */ (function () {
    function StateFactory() {
    }
    StateFactory.prototype.createState = function (name) {
        if (name == ActionEnum.Circle || name == ActionEnum.Rectangle || name == ActionEnum.Line) {
            return new ShapeState(name);
        }
        return new SelectState();
    };
    return StateFactory;
}());
//# sourceMappingURL=StateFactory.js.map