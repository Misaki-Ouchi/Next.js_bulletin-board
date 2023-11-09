import React, { ReactNode } from "react";

type ButtonProps = {
  variant: 'button'
  onClick: () => void
  children: ReactNode
}

type LinkProps = {
  variant: 'link'
  href: string
  children: ReactNode
}

type ButtonOrLinkProps = ButtonProps | LinkProps

const ButtonOrLink = (props: ButtonOrLinkProps): JSX.Element => {
  if (props.variant === 'button') {
    return <button onClick={props.onClick}>{props.children}</button>
  } else {
    return <a href={props.href}>{props.children}</a>
  }
}

export default ButtonOrLink
