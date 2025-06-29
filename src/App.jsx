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
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {currentUser.role === 'admin' && (
            <button style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer'
            }}>
              ➕ Ajouter séance
            </button>
          )}
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
      </div>
    </header>

    {/* Dashboard Admin */}
    <main style={{ padding: '2rem' }}>
      {currentUser.role === 'admin' ? (
        <div>
          <h3 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem', color: '#1f2937' }}>
            📊 Dashboard Administrateur
          </h3>

          {/* Métriques principales */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem', 
            marginBottom: '2rem' 
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>Membres actifs</p>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6', margin: '0.5rem 0 0 0' }}>147</p>
                </div>
                <div style={{ fontSize: '2rem' }}>👥</div>
              </div>
              <p style={{ color: '#10b981', fontSize: '0.875rem', margin: '0.5rem 0 0 0' }}>+12 ce mois</p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>Revenus mensuels</p>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981', margin: '0.5rem 0 0 0' }}>2,340€</p>
                </div>
                <div style={{ fontSize: '2rem' }}>💰</div>
              </div>
              <p style={{ color: '#10b981', fontSize: '0.875rem', margin: '0.5rem 0 0 0' }}>+8% vs mois dernier</p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>Séances cette semaine</p>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#8b5cf6', margin: '0.5rem 0 0 0' }}>23</p>
                </div>
                <div style={{ fontSize: '2rem' }}>📅</div>
              </div>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: '0.5rem 0 0 0' }}>5 en attente validation</p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>Messages non lus</p>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ef4444', margin: '0.5rem 0 0 0' }}>8</p>
                </div>
                <div style={{ fontSize: '2rem' }}>📨</div>
              </div>
              <p style={{ color: '#ef4444', fontSize: '0.875rem', margin: '0.5rem 0 0 0' }}>3 prioritaires</p>
            </div>
          </div>

          {/* Abonnements PASS */}
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '0.75rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            marginBottom: '2rem'
          }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>
              💳 Abonnements PASS VIVELESPORT
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div style={{ padding: '1rem', backgroundColor: '#dbeafe', borderRadius: '0.5rem' }}>
                <h5 style={{ color: '#1e40af', margin: '0 0 0.5rem 0' }}>PASS Équilibre</h5>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e40af', margin: 0 }}>89 membres</p>
                <p style={{ fontSize: '0.875rem', color: '#3b82f6', margin: '0.25rem 0 0 0' }}>15€/mois • 40 séances/an</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#dcfce7', borderRadius: '0.5rem' }}>
                <h5 style={{ color: '#166534', margin: '0 0 0.5rem 0' }}>PASS Évolution</h5>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#166534', margin: 0 }}>52 membres</p>
                <p style={{ fontSize: '0.875rem', color: '#16a34a', margin: '0.25rem 0 0 0' }}>30€/mois • 156 séances/an</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '0.5rem' }}>
                <h5 style={{ color: '#92400e', margin: '0 0 0.5rem 0' }}>Programme Activation</h5>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#92400e', margin: 0 }}>6 actifs</p>
                <p style={{ fontSize: '0.875rem', color: '#d97706', margin: '0.25rem 0 0 0' }}>50€ unique • 5 semaines</p>
              </div>
            </div>
          </div>

          {/* Actions rapides */}
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '0.75rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            marginBottom: '2rem'
          }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>
              ⚡ Actions rapides
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <button style={{
                padding: '1rem',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>👥</div>
                <div style={{ fontWeight: '600' }}>Gérer les membres</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Voir tous les profils</div>
              </button>
              
              <button style={{
                padding: '1rem',
                backgroundColor: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>💰</div>
                <div style={{ fontWeight: '600' }}>Valider paiements</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Espèces & chèques</div>
              </button>
              
              <button style={{
                padding: '1rem',
                backgroundColor: '#8b5cf6',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📅</div>
                <div style={{ fontWeight: '600' }}>Planning séances</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Voir le calendrier</div>
              </button>
              
              <button style={{
                padding: '1rem',
                backgroundColor: '#f59e0b',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎁</div>
                <div style={{ fontWeight: '600' }}>Accès gratuits</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Gérer les droits</div>
              </button>
            </div>
          </div>

          {/* Alertes importantes */}
          <div style={{
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            padding: '1rem',
            borderRadius: '0.75rem',
            marginBottom: '2rem'
          }}>
            <h4 style={{ color: '#dc2626', fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.75rem' }}>
              ⚠️ Alertes importantes
            </h4>
            <ul style={{ color: '#dc2626', margin: 0, paddingLeft: '1.25rem' }}>
              <li>3 certificats médicaux expirent dans 30 jours</li>
              <li>2 demandes d'annulation de séances en attente</li>
              <li>1 paiement terrain à valider (espèces)</li>
            </ul>
          </div>

        </div>
      ) : (
        // Dashboard pour Coach/Membre (simplifié)
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '0.5rem',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
            👋 Bienvenue {currentUser.name} !
          </h3>
          <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
            Votre interface {currentUser.role === 'coach' ? 'coach' : 'membre'} sera bientôt disponible avec toutes les fonctionnalités.
          </p>
          <div style={{
            backgroundColor: '#dbeafe',
            border: '1px solid #93c5fd',
            borderRadius: '0.5rem',
            padding: '1rem'
          }}>
            <h4 style={{ color: '#1e40af', marginBottom: '0.5rem' }}>Prochainement disponible :</h4>
            <ul style={{ color: '#1e40af', marginLeft: '1rem' }}>
              {currentUser.role === 'coach' ? (
                <>
                  <li>📅 Vos séances et planning</li>
                  <li>👥 Liste de vos participants</li>
                  <li>✅ Interface d'appel</li>
                  <li>💬 Messagerie avec les membres</li>
                </>
              ) : (
                <>
                  <li>📊 Vos quotas d'abonnement</li>
                  <li>📅 Inscription aux séances</li>
                  <li>💳 Gestion de votre PASS</li>
                  <li>📄 Upload certificat médical</li>
                </>
              )}
            </ul>
          </div>
        </div>
      )}
    </main>
  </div>
);
}

export default App;