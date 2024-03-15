import { en } from '@/tests/data/locales/en'
import { hi } from '@/tests/data/locales/hi'
import { mr } from '@/tests/data/locales/mr'
import { pa } from '@/tests/data/locales/pa'
import { ja } from '@/tests/data/locales/ja'
import { List } from '@/types/localization/list'

/**
 * List all test lanuages available in application.
 *
 * @var const {List} list
 * @reference https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes
 */
export const list: List = {
  en: {
    isLocalized: true,
    meta: {
      name: 'English',
      isoCode: 'en',
      nativeName: 'English',
    },
    translation: en,
  },
  hi: {
    isLocalized: true,
    meta: {
      name: 'Hindi',
      isoCode: 'hi',
      nativeName: 'हिन्दी, हिंदी',
    },
    translation: hi,
  },
  mr: {
    isLocalized: true,
    meta: {
      name: 'Marathi (Marāṭhī)',
      isoCode: 'mr',
      nativeName: 'मराठी',
    },
    translation: mr,
  },
  pa: {
    isLocalized: true,
    meta: {
      name: 'Panjabi, Punjabi',
      isoCode: 'pa',
      nativeName: 'ਪੰਜਾਬੀ',
    },
    translation: pa,
  },
  ja: {
    isLocalized: false,
    meta: {
      name: 'Japanese',
      isoCode: 'ja',
      nativeName: '日本語 (にほんご／にっぽんご)',
    },
    translation: ja,
  },
}
