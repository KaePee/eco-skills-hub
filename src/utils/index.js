// parse classnames and join with an empty space

export const cx = (...classNames) => classNames.filter(Boolean).join(' ')
