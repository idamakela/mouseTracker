import { createContext } from 'react';
import { ClickedItemType, DisplayitemType, TimesClickedType } from './types';

export const ClickedItemContext = createContext<ClickedItemType | null>(null);

export const DisplayItemContext = createContext<DisplayitemType | null>(null);

export const TimesClickedContext = createContext<TimesClickedType | null>(null);
