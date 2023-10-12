import { useMemo } from 'react';
import { useAppDispatch } from './reducer'
import {bindActionCreators} from "@reduxjs/toolkit"
import {actions} from "../store/favorites/favorites.slice";

const rootActions = {
    ...actions,
}

export const useActions = () => {
    const dispatch = useAppDispatch();

    return useMemo(() => {
        return bindActionCreators(rootActions, dispatch);
    },[dispatch])
}
