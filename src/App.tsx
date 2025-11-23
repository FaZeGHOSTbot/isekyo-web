import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Shop from './components/Shop';
import Documentation from './components/Documentation';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-black">
        <Navigation />
        <Hero />
        <Shop />
        <Documentation />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
