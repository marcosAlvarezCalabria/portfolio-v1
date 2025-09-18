import { lazy, Suspense, useEffect } from 'react'

const MainPage = lazy(() => import("./pages/mainPage/main-page"))

function App() {
  useEffect(() => {
    const gaId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
    if (gaId) {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}');
      `;
      document.head.appendChild(script2);
    }
  }, []);

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
