import {
    createThemeContract,
    createTheme
} from '@vanilla-extract/css'


export const contract = createThemeContract({
    colors: {
        primary: null,
        secondary: null,
        default: null
    }
})

/** rules values (as '16px', etc...)
 * Vales for rules could come from objects (1)
 * or declared directly within the theme (2). 
 */

// rules values : (1)
const colors = {
    secondary: '#e0e4cc'
}

// rules values : (2)
export const themePrimary = createTheme(contract, {
    colors: {
        primary: '#69d2e7',
        secondary: colors.secondary,
        default: '#fa6900'
    }
})
