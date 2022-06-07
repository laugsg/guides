import {
    style
} from '@vanilla-extract/css'
import {
    contract
} from './contracts/contract.css'

// how the Style is it
export const themePrimaryDefinition = style({
    // css property defined: background
    // contract value: contract.colors.primary
    background: contract.colors.primary
})