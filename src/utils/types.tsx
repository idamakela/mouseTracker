export type ClickedItemType = {
  currentClickedItem: string;
  setCurrentClickedItem: (currentClickedItem: string) => void;
};

export type DisplayitemType = {
  displayClickedItem: string;
  setDisplayClickedItem: (currentClickedItem: string) => void;
};

export type TimesClickedType = {
  clickCount: number;
  setClickCount: (clickCount: number) => void;
};
