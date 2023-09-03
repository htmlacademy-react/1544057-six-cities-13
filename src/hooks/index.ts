import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppDispatchType, StateType } from '../types/state';

const useAppDispatch = () => useDispatch<AppDispatchType>();

const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;

export { useAppDispatch, useAppSelector };
