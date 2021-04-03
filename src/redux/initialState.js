import {storage} from '@core/utils'
import {defaultStyles, defaulTitle} from '../constants'
const defaultState = {
    rowState: {},
    colState: {},
    currentText: '',
    title: defaulTitle,
    dataState: {},
    stylesState: {},
    currentStyles: defaultStyles
}
const normalize = state => ({
    ...state,
    currentStyles: defaultStyles,
    currentText: ''
})
export const initialState = storage('excel-state') ? normalize(storage('excel-state')) : defaultState