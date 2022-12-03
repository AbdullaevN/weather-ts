import { AppDispatch, RootState } from "../store/store";
import {useDispatch,TypedUseSelectorHook,useSelector} from 'react-redux'


export const useCustomDispatch = () => useDispatch<AppDispatch>();
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;