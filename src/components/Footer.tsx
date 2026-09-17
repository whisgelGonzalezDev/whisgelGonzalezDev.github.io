import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-8 pb-24 md:pb-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-xs text-[var(--color-muted)] sm:flex-row">
        <p>
          © {year} Whisgel González — {t('footer.rights')}
        </p>
        <p>{t('footer.built_with')}</p>
      </div>
    </footer>
  )
}
