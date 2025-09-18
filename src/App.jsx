import { lazy, Suspense } from 'react'

const MainPage = lazy(() => import("./pages/mainPage/main-page"))

function App() {
  return (
    <Suspense fallback={
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px'
      }}>
        Cargando...
      </div>
    }>
      <MainPage/>
    </Suspense>
  )
}

export default App
