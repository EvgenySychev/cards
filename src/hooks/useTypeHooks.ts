import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppRootStateType, AppDispatch } from './../app/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
