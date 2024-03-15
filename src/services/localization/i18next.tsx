import i18next from 'i18next'
import { list } from '@/locales/list'
import { initReactI18next } from 'react-i18next'
import { I18nextResources } from '@/types/localization'
import { Localizer } from '@/services/localization/localizer'

const localizer: Localizer = new Localizer(list)
const resources: I18nextResources = localizer.getI18nextResources()

i18next
  .use(initReactI18next)
  .init({
    // TODO: set default locale using localizer
    lng: 'en',
    // TODO: set fallback locale using localizer
    fallbackLng: 'en',
    compatibilityJSON: 'v3',
    resources: resources,
  })
  .then((t) => console.log('I18next Initialized'))

export { i18next, localizer, resources }
