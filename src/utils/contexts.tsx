import { createContext } from 'react';
import { ClickedItemType, DisplayitemType } from './types';

export const ClickedItemContext = createContext<ClickedItemType | null>(null);

export const DisplayItemContext = createContext<DisplayitemType | null>(null);
