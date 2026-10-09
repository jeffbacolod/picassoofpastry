import { LanguageProvider } from './i18n/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <Home />
      <Footer />
    </LanguageProvider>
  );
}
