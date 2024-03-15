import { MetaData } from '@/types/localization/meta-data'
import { Translation } from '@/types/localization/translation'

/**
 * Represents a locale with metadata.
 *
 * @type {Locale} Locale
 */
export type Locale = {
  meta: MetaData
  isLocalized: boolean
  translation: Translation
}
