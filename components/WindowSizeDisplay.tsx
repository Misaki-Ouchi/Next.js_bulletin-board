import useWindowSize from "hooks/useWindowSize";

const WindowSizeDisplay = () => {
  const size = useWindowSize()

  return (
    <div>
      現在のウィンドウのサイズ：幅 {size.width}px、高さ {size.height}px
    </div>
  )
}

export default WindowSizeDisplay
