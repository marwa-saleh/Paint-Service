class UIController {

    private static instance: UIController;

    private constructor() {
        this._currentState = new IntialState();
        this._shapes = new Array();
    }

    public static getInstance(): UIController {
        if (!UIController.instance) {
            UIController.instance = new UIController();
        }

        return UIController.instance;
    }

    private _currentState: IState;
    private _contextWrapper: IContext;
    private _shapes: Array<AShape>;


    public SelectAction(action: ActionEnum) {
        const stateFactory = new StateFactory();
        this._currentState = stateFactory.createState(action);
    }

    public SetContexWrapper(contextWrapper: IContext) {
        this._contextWrapper = contextWrapper;
    }

    public GetContextWrapper() {
        return this._contextWrapper;
    }

    public AddShape(shape: AShape) {
        this._shapes.push(shape);
    }

    public MouseDown(x: number, y: number) {
        this._currentState = this._currentState.MouseDown(x, y);
    }

    public MouseMove(x: number, y: number) {
        this._currentState = this._currentState.MouseMove(x, y);
    }

    public MouseUp(x: number, y: number) {
        this._currentState = this._currentState.MouseUp(x, y);
    }

    public ReDraw() {
        this._contextWrapper.clear();

        for (let index in this._shapes) {
            const shape = this._shapes[index];
            shape.draw(this._contextWrapper);
        }
    }


}

