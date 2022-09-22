var context;
function TSButton(buttonName) {
    UIController.getInstance().SelectAction(ActionEnum[buttonName]);
}
function Init() {
    var canvas, ctx;
    canvas = document.getElementById('paintCanvas');
    ctx = canvas.getContext('2d');
    context = new CanvasContext(ctx, canvas);
    UIController.getInstance().SetContexWrapper(context);
}
function MouseDown(e) {
    var _a = context.getMousePosition(e.clientX, e.clientY), x = _a.x, y = _a.y;
    UIController.getInstance().MouseDown(x, y);
}
function MouseMove(e) {
    var _a = context.getMousePosition(e.clientX, e.clientY), x = _a.x, y = _a.y;
    UIController.getInstance().MouseMove(x, y);
}
function MouseUp(e) {
    var _a = context.getMousePosition(e.clientX, e.clientY), x = _a.x, y = _a.y;
    UIController.getInstance().MouseUp(x, y);
}
document.addEventListener('DOMContentLoaded', Init);
window.addEventListener("mousedown", MouseDown);
window.addEventListener("mouseup", MouseUp);
window.addEventListener("mousemove", MouseMove);
//# sourceMappingURL=App.js.map