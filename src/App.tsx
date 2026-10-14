import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { SiteContentProvider } from './context/SiteContentContext';
import Header from './components/Header';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Product from './pages/Product';
import Projects from './pages/Projects';
import Docs from './pages/Docs';
import Order from './pages/Order';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Folder from './pages/Folder';
import Login from './pages/Login';
import Register from './pages/Register';
import Terms from './pages/Terms';
import Dashboard from './pages/Dashboard';
import OrderTracker from './pages/OrderTracker';
import Configurator from './pages/Configurator';
import ObjectFolder from './pages/ObjectFolder';
import Finance from './pages/Finance';
import CMS from './pages/CMS';
import Admin from './pages/Admin';

function App() {
  return (
    <AuthProvider>
      <SiteContentProvider>
      <Router>
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--c-coal)' }}>
          <Header />
          <main id="main" className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/order" element={<Order />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/folder" element={<Folder />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/dashboard/order/:id" element={<ProtectedRoute><OrderTracker /></ProtectedRoute>} />
              <Route path="/dashboard/configurator" element={<ProtectedRoute><Configurator /></ProtectedRoute>} />
              <Route path="/dashboard/object-folder" element={<ProtectedRoute><ObjectFolder /></ProtectedRoute>} />
              <Route path="/dashboard/finance" element={<ProtectedRoute><Finance /></ProtectedRoute>} />
              <Route path="/dashboard/cms" element={<ProtectedRoute><CMS /></ProtectedRoute>} />
              <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
            </Routes>
          </main>
          <Footer />
          <AIAssistant />
        </div>
      </Router>
      </SiteContentProvider>
    </AuthProvider>
  );
}

export default App;
