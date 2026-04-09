import { Outlet } from 'react-router-dom'
import PageFooter from './PageFooter'
import SiteNavbar from './SiteNavbar'

function SiteLayout() {
  return (
    <div className="site-shell">
      <SiteNavbar />
      <main className="page-shell">
        <Outlet />
      </main>
      <PageFooter />
    </div>
  )
}

export default SiteLayout
