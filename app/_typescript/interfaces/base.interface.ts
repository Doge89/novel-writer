export interface ReducerAction<TActionType, TActionValue> {
  type: TActionType;
  value: TActionValue;
}
