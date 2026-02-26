interface SplitAction {
  label: string;
  onPress: () => void;
  backgroundColor: string;
}

export interface SplitButtonProps {
  splitted: boolean;
  mainAction: SplitAction;
  leftAction: SplitAction;
  rightAction: SplitAction;
}
