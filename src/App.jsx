import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Info from "./pages/Info/Info.jsx";
import Login from "./pages/Auth/Login.jsx";
import Signup from "./pages/Auth/Signup.jsx";
import News from "./pages/News/News.jsx";
import CompanyDetail from "./pages/Company/CompanyDetail.jsx";
import GoogleOAuth from "./pages/Auth/GoogleOAuth.jsx";
import DetailPage from "./pages/Company/DetailPage.jsx";
import Company from "./pages/Company/Company.jsx";
import ImageUploader from "./pages/Company/CompanyImage.jsx";
import FetchFile from "./hooks/fetch/FetchFile.jsx";
import PostCompany from "./pages/Company/PostCompany.jsx";
import Test from "./pages/Test/Test.jsx";

function Router() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route exact path="/" element={<Home />} />
        <Route path="company">
          <Route path="" element={<Company />} />
          <Route path=":id" element={<CompanyDetail />} />
          <Route path="detail/:id" element={<DetailPage />} />
          <Route path="image" element={<ImageUploader />} />
          <Route path="post" element={<PostCompany />} />
          <Route path="file" element={<FetchFile />} />
        </Route>
        <Route path="info" element={<Info />} />
        <Route path="news" element={<News />} />
        <Route path="auth">
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="google" element={<GoogleOAuth />} />
        </Route>
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function App() {
  return <Router />;
}

export default App;
