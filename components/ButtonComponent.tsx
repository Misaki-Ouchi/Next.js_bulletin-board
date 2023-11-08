import React from "react";

type Props = {
  onClick: () => void
  // 「何も引数を受け取らず、何も返さない関数」を期待
}

const ButtonComponent = ({ onClick }: Props): JSX.Element => {
  return <button onClick={onClick}>Click me!</button>
}

export default ButtonComponent
