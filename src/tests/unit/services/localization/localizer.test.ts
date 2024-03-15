import lodash from 'lodash'
import { list } from '@/tests/data/locales'
import { Localizer } from '@/services/localization'
import { describe, expect, test } from '@jest/globals'
import { I18nextResources } from '@/types/localization'

/**
 * Initializes a `Localizer` instance with the provided list of locales.
 *
 * @type {Localizer}
 */
const localizer: Localizer = new Localizer(list)

/**
 * Represents a test namespace for localization services.
 *
 * @var const string
 * @namespace Services.Localization
 */
const namespace: string = 'Services/Localization::Localizer'

/**
 * Tests for the `Localizer` class within the specified namespace.
 * @module Services.Localization
 */
describe(`${namespace} Unit Testing`, () => {
  /**
   * Tests the `getLocalesList()` method.
   */
  test('getLocalesList()', () => {
    expect(localizer.getLocalesList()).toBe(list)
  })

  /**
   * Tests the `getTranslations(locale: string)` method.
   */
  test('getTranslations()', () => {
    lodash.keys(list).map((locale: string) => {
      expect(localizer.getTranslations(locale)).toStrictEqual(
        list[locale].translation,
      )
    })
  })

  /**
   * Tests the `getIsoCodes()` method.
   */
  test('getIsoCodes()', () => {
    expect(localizer.getIsoCodes()).toStrictEqual(lodash.keys(list))
  })

  /**
   * Tests the `getLocales()` method.
   */
  test('getLocales()', () => {
    expect(localizer.getLocales()).toStrictEqual(lodash.values(list))
  })

  /**
   * Tests the `getLocalizedLocaleIsoCodes()` method.
   */
  test('getLocalizedLocaleIsoCodes()', () => {
    const localized: string[] = lodash
      .entries(list)
      .filter(([, locale]) => locale.isLocalized)
      .map(([isoCode]) => isoCode)

    expect(localizer.getLocalizedLocaleIsoCodes()).toStrictEqual(localized)
  })

  /**
   * Tests the `getUnLocalizedLocaleIsoCodes()` method.
   */
  test('getUnLocalizedLocaleIsoCodes()', () => {
    const localized: string[] = lodash
      .entries(list)
      .filter(([, locale]) => !locale.isLocalized)
      .map(([isoCode]) => isoCode)

    expect(localizer.getUnLocalizedLocaleIsoCodes()).toStrictEqual(localized)
  })

  /**
   * Tests the `getI18nextResources()` method.
   */
  test('getI18nextResources()', () => {
    let languageResources: I18nextResources = {}

    lodash
      .entries(list)
      .filter(([, locale]) => locale.isLocalized)
      .map(([isoCode, locale]) => {
        languageResources[isoCode] = {
          translation: locale.translation,
        }
      })

    expect(localizer.getI18nextResources()).toStrictEqual(languageResources)
  })
})
