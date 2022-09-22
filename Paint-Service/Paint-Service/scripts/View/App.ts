let context : CanvasContext;

function TSButton(buttonName) {
    UIController.getInstance().SelectAction(ActionEnum[buttonName]);
}

function Init() {
    let canvas, ctx;
    canvas = document.getElementById('paintCanvas');
    ctx = canvas.getContext('2d');
    context = new CanvasContext(ctx, canvas);
    UIController.getInstance().SetContexWrapper(context);
}

function MouseDown(e) {
    let { x, y } = context.getMousePosition(e.clientX, e.clientY);
    UIController.getInstance().MouseDown(x, y);
}

function MouseMove(e) {
    let { x, y } = context.getMousePosition(e.clientX, e.clientY);
    UIController.getInstance().MouseMove(x, y);
}


function MouseUp(e) {
    let { x, y } = context.getMousePosition(e.clientX, e.clientY);
    UIController.getInstance().MouseUp(x, y);
}

document.addEventListener('DOMContentLoaded', Init)
window.addEventListener("mousedown", MouseDown);
window.addEventListener("mouseup", MouseUp);
window.addEventListener("mousemove", MouseMove);