import React, { useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('login');

  // Données de test
  const users = [
    { id: 1, email: 'admin@lam.fr', role: 'admin', name: 'Admin LAM' },
    { id: 2, email: 'coach@lam.fr', role: 'coach', name: 'Marie Dubois' },
    { id: 3, email: 'member@lam.fr', role: 'member', name: 'Jean Martin' }
  ];

  const handleLogin = (email) => {
    const user = users.find(u => u.email === email);
    if (user) {
      setCurrentUser(user);
      setCurrentPage('dashboard');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentPage('login');
  };

  // Page de connexion
  if (!currentUser) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%)'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          width: '100%',
          maxWidth: '400px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              <span style={{ color: '#2563eb' }}>Vive</span>
              <span style={{ color: '#ef4444' }}>Le</span>
              <span style={{ color: '#2563eb' }}>Sport</span>
            </h1>
            <p style={{ color: '#6b7280' }}>Bienvenue et vive le sport!</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button
              onClick={() => handleLogin('admin@lam.fr')}
              style={{
                width: '100%',
                backgroundColor: '#ef4444',
                color: 'white',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.875rem'
              }}
            >
              Connexion Admin LAM
            </button>
            <button
              onClick={() => handleLogin('coach@lam.fr')}
              style={{
                width: '100%',
                backgroundColor: '#10b981',
                color: 'white',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.875rem'
              }}
            >
              Connexion Coach
            </button>
            <button
              onClick={() => handleLogin('member@lam.fr')}
              style={{
                width: '100%',
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.875rem'
              }}
            >
              Connexion Membre
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard après connexion
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Header */}
      <header style={{
        backgroundColor: 'white',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        padding: '1rem 2rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', margin: 0 }}>
              Bonjour {currentUser.name}
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
              {currentUser.role === 'admin' && 'Super administrateur'}
              {currentUser.role === 'coach' && 'Coach'}
              {currentUser.role === 'member' && 'Membre'}
            </p>
          </div>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#ef4444',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Déconnexion
          </button>
        </div>
      </header>

      {/* Contenu principal */}
      <main style={{ padding: '2rem' }}>
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '0.5rem',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
            🎉 Application ViveLeSport déployée avec succès !
          </h3>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ marginBottom: '0.5rem' }}>✅ Connexion fonctionnelle</p>
            <p style={{ marginBottom: '0.5rem' }}>✅ Gestion des rôles (Admin/Coach/Membre)</p>
            <p style={{ marginBottom: '0.5rem' }}>✅ Interface responsive</p>
            <p style={{ marginBottom: '0.5rem' }}>✅ Prêt pour intégration Supabase</p>
          </div>

          <div style={{
            backgroundColor: '#dbeafe',
            border: '1px solid #93c5fd',
            borderRadius: '0.5rem',
            padding: '1rem'
          }}>
            <h4 style={{ color: '#1e40af', marginBottom: '0.5rem' }}>Prochaines étapes :</h4>
            <ul style={{ color: '#1e40af', marginLeft: '1rem' }}>
              <li>🗄️ Configurer la base de données Supabase</li>
              <li>🔗 Connecter les API</li>
              <li>🚀 Déployer sur Vercel</li>
              <li>💳 Intégrer Stripe pour les paiements</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;