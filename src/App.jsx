import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Expenses from './pages/Expenses';
import Reports from './pages/Reports';
// import './App.css'

function App() {
  return (
    <Router>
      <div className="flex">
        <aside className="w-64 bg-gray-800 text-white h-screen p-4">
          <h1 className="text-2xl font-bold mb-8">Surprise Bakery</h1>
          <nav>
            <ul>
              <li className="mb-4"><Link to="/" className="hover:text-gray-300">Dashboard</Link></li>
              <li className="mb-4"><Link to="/orders" className="hover:text-gray-300">Orders</Link></li>
              <li className="mb-4"><Link to="/expenses" className="hover:text-gray-300">Expenses</Link></li>
              <li className="mb-4"><Link to="/reports" className="hover:text-gray-300">Reports</Link></li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-8 bg-gray-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
