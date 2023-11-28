import Header from './Header'
import Main from './Main'
import Aside from './Aside'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className='bodyWrap'>
      <Header />
      <div className="asideAndMain">
        <Aside />
        <Main>{children}</Main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
