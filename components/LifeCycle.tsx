import React from "react";

type Props = {
  message: string
}

const LifeCycle = ({ message }: Props) => {
  React.useEffect(() => {
    console.log('1Component mounted')

    return () => {
      console.log('3Component will unmount')
    }
  }, [])
  
  React.useEffect(() => {
    console.log('2Component update')
  })

  return <div>{message}</div>
}

LifeCycle.getInitialProps = () => {
  return {message: 'Hello, World!'}
}

export default LifeCycle
