import lodash from 'lodash'
import {
  List,
  Locale,
  Translation,
  I18nextResources,
} from '@/types/localization'

export class Localizer {
  /**
   * A list of locales with associated metadata.
   *
   * @var {List} list
   */
  protected list: List

  /**
   * Construct localizer instance.
   *
   * @param {List} list
   * @return void
   */
  constructor(list: List) {
    this.list = list
  }

  /**
   * Get all locales as key and value pair.
   *
   * @return {List}
   */
  getLocalesList(): List {
    return this.list
  }

  /**
   * Get all locales iso codes.
   *
   * @return {string[]}
   */
  getIsoCodes(): string[] {
    return lodash.keys(this.list)
  }

  /**
   * Get all locales as array of locale.
   *
   * @return {Locale[]}
   */
  getLocales(): Locale[] {
    return lodash.values(this.list)
  }

  /**
   * Get Translation of specified locale.
   *
   * @param {string} locale
   * @return {Translation[]}
   */
  getTranslations(locale: string): Translation {
    return lodash.get(this.list, locale).translation
  }

  /**
   * Get all localized locales iso codes.
   *
   * @return  {Array<string>}
   */
  getLocalizedLocaleIsoCodes(): Array<string> {
    let list: Set<string> = new Set<string>()

    for (const [isoCode, locale] of lodash.entries(this.list)) {
      if (false === locale.isLocalized) {
        continue
      }

      list.add(isoCode)
    }

    return Array.from<string>(list)
  }

  /**
   * Get all un localized locales iso codes.
   *
   * @return  {Array<string>}
   */
  getUnLocalizedLocaleIsoCodes(): Array<string> {
    let list: Set<string> = new Set<string>()

    for (const [isoCode, locale] of lodash.entries(this.list)) {
      if (true === locale.isLocalized) {
        continue
      }

      list.add(isoCode)
    }

    return Array.from<string>(list)
  }

  /**
   * Get i18next resources.
   *
   * @return {I18nextResources}
   */
  getI18nextResources(): I18nextResources {
    let languageResources: I18nextResources = {}

    for (const locale of this.getLocalizedLocaleIsoCodes()) {
      languageResources[locale] = { translation: this.getTranslations(locale) }
    }

    return languageResources
  }
}
