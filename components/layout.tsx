import Footer from './footer'
import Meta from './meta'
import Header from './header'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="justify-center flex mt-4">
        <main className="sm:w-2/3 w-screen">{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
