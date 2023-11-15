import RecentTitles from '@/components/main_parts/RecentTitles'
import SomeCategory from '@/components/page_main/SomeCategory'
import SomeTitle from '@/components/page_main/SomeTitle'

const Main = ({children}) => {
  return (
    <>
      <main className="container">
        <div className="container_box">
        {children}
        </div>
      </main>
    </>
  )
}

export default Main
