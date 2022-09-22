class StateFactory {

    public createState(name: ActionEnum) {
    if (name == ActionEnum.Circle|| name == ActionEnum.Rectangle || name == ActionEnum.Line) {
            return new ShapeState(name);
        }
        return new SelectState();
    }

}
