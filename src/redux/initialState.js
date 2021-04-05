import {defaultStyles, defaulTitle} from '../constants'
import {clone} from '@core/utils'
const defaultState = {
    rowState: {},
    colState: {},
    currentText: '',
    title: defaulTitle,
    dataState: {},
    stylesState: {},
    currentStyles: defaultStyles,
    openedDate: new Date().toJSON()
}
const normalize = state => ({
    ...state,
    currentStyles: defaultStyles,
    currentText: ''
})
export function normalizeInitialState(state){
    return state ? normalize(state) : clone(defaultState)
}