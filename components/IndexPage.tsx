import React from "react";

type Props = {
  message: string
}

const IndexPage = ({ message }: Props): JSX.Element => {
  const showMessage = (msg: string): void => {
    alert(msg)
  }

  React.useEffect(() => {
    showMessage(message)
  }, [message])

  return <div>Welcome to Next.js!</div>
}

export default IndexPage
