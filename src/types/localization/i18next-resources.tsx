import { Translation } from '@/types/localization/translation'

/**
 * Represents a i18next resources.
 *
 * @type {I18nextResources} I18nextResources
 */
export type I18nextResources = {
  [key: string]: {
    translation: Translation
  }
}
