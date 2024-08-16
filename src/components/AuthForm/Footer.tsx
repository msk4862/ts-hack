import clsx from 'clsx'
import ClickableDiv from '@shared/ClickableDiv'

type Props = {
  description: string
  cta: string
  className?: string
  onCtaClick: () => void
}

export default function Footer({
  className,
  description,
  cta,
  onCtaClick,
}: Props) {
  return (
    <div className={clsx('mt-3', className)}>
      <span>
        {description}
        <ClickableDiv
          onClick={onCtaClick}
          aria-label={cta}
          className='inline-block text-heading ml-1'
        >
          {`${cta} →`}
        </ClickableDiv>
      </span>
    </div>
  )
}
