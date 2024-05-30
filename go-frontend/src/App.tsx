import { Route, Routes } from "react-router-dom"
import SignUpPage from "./pages/sign-up/sign-up-page"
import Header from "./components/header/header"
import SignInPage from "./pages/sign-in/sign-in-page"

function App() {

  return (
    <>
      <Header/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
      
    </>
  )
}

export default App
