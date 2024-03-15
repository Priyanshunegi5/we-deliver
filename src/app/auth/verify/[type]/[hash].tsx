import { useTranslation } from 'react-i18next'

export default function Page() {
  const { t } = useTranslation()

  return <>{t('Verify {type}/{hash}')}</>
}
