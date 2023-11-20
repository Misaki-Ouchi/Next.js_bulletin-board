import Header from './Header'
import Main from './Main'
import Aside from './Aside'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <div className='flex flex-row-reverse'>
        <Main>{children}</Main>
        <Aside />
      </div>
      <Footer />
    </>
  )
}

export default Layout
