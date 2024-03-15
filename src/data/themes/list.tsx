import { solar } from '@/data/themes/solar'
import { lunar } from '@/data/themes/lunar'

/**
 * All application themes will be defined here.
 *
 * @var const list
 */
export const list: Record<string, object> = {
    // All Themes goes here
    lunar: {
        type: 'dark',
        name: 'Lunar',
        theme: lunar,
    },
    solar: {
        type: 'light',
        name: 'solar',
        theme: solar,
    }
};