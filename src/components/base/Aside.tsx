const Aside = () => {
  return (
    <>
      <aside className="container_box bg-blue-200 text-sm">
        <div>
          <input className="mb-2" type="text" placeholder="カテゴリ名" />
          <button className="mb-3 btn">カテゴリ登録</button>
        </div>
        <div>
          <p>カテゴリ一覧～</p>
        </div>
      </aside>
    </>
  )
}
export default Aside
