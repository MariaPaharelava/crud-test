import { Helmet } from 'react-helmet-async'
import { DataGrid } from 'src/components/data-grid'

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Users</title>
      </Helmet>
      <DataGrid />
    </>
  )
}
