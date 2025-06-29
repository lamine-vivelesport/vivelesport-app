</div>
        </div>
      </div>

      {/* Modal profil détaillé */}
      {showMemberModal && selectedMember && <MemberDetailModal />}
    </div>
  );

  // Modal de profil détaillé d'un membre
  const MemberDetailModal = () => {
    const [activeTab, setActiveTab] = useState('profile');
    
    // Données simulées pour l'historique
    const sessionHistory = [
      { id: 1, date: '2025-06-25', type: 'Aquagym', status: 'present', coach: 'Marie Dubois' },
      { id: 2, date: '2025-06-22', type: 'Marche Nordique', status: 'present', coach: 'Marie Dubois' },
      { id: 3, date: '2025-06-20', type: 'Renforcement', status: 'absent', coach: 'Pierre Martin' },
      { id: 4, date: '2025-06-18', type: 'Aquagym', status: 'present', coach: 'Marie Dubois' },
      { id: 5, date: '2025-06-15', type: 'Marche Nordique', status: 'present', coach: 'Marie Dubois' }
    ];

    const paymentHistory = [
      { id: 1, date: '2025-06-01', amount: '15€', type: 'Virement', status: 'validé', period: 'Juin 2025' },
      { id: 2, date: '2025-05-01', amount: '15€', type: 'Espèces', status: 'validé', period: 'Mai 2025' },
      { id: 3, date: '2025-04-01', amount: '15€', type: 'Chèque', status: 'validé', period: 'Avril 2025' }
    ];

    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '1rem'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          width: '100%',
          maxWidth: '900px',
          maxHeight: '90vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Header du modal */}
          <div style={{
            padding: '1.5rem',
            borderBottom: '1px solid #e5e7eb',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#3b82f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                {selectedMember.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0, color: '#1f2937' }}>
                  {selectedMember.name}
                </h3>
                <p style={{ color: '#6b7280', margin: '0.25rem 0 0 0' }}>
                  Membre depuis le {new Date(selectedMember.joinDate).toLocaleDateString('fr-FR')}
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowMemberModal(false)}
              style={{
                padding: '0.5rem',
                backgroundColor: '#f3f4f6',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontSize: '1.25rem'
              }}
            >
              ✕
            </button>
          </div>

          {/* Onglets */}
          <div style={{
            padding: '0 1.5rem',
            borderBottom: '1px solid #e5e7eb',
            display: 'flex',
            gap: '2rem'
          }}>
            {[
              { id: 'profile', label: '👤 Profil', icon: '👤' },
              { id: 'subscription', label: '💳 Abonnement', icon: '💳' },
              { id: 'sessions', label: '📅 Séances', icon: '📅' },
              { id: 'payments', label: '💰 Paiements', icon: '💰' },
              { id: 'documents', label: '📄 Documents', icon: '📄' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '1rem 0.5rem',
                  border: 'none',
                  backgroundColor: 'transparent',
                  borderBottom: activeTab === tab.id ? '2px solid #3b82f6' : '2px solid transparent',
                  color: activeTab === tab.id ? '#3b82f6' : '#6b7280',
                  fontWeight: activeTab === tab.id ? '600' : '400',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Contenu des onglets */}
          <div style={{ flex: 1, overflow: 'auto', padding: '1.5rem' }}>
            
            {/* Onglet Profil */}
            {activeTab === 'profile' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>
                    Informations personnelles
                  </h4>
                  <div style={{ space: '1rem' }}>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                        Nom complet
                      </label>
                      <input
                        type="text"
                        value={selectedMember.name}
                        style={{
                          width: '100%',
                          padding: '0.5rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.375rem'
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                        Email
                      </label>
                      <input
                        type="email"
                        value={selectedMember.email}
                        style={{
                          width: '100%',
                          padding: '0.5rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.375rem'
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        value={selectedMember.phone}
                        style={{
                          width: '100%',
                          padding: '0.5rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.375rem'
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                        Date de naissance
                      </label>
                      <input
                        type="date"
                        style={{
                          width: '100%',
                          padding: '0.5rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.375rem'
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>
                    Statistiques
                  </h4>
                  <div style={{ space: '1rem' }}>
                    <div style={{
                      padding: '1rem',
                      backgroundColor: '#f9fafb',
                      borderRadius: '0.5rem',
                      marginBottom: '1rem'
                    }}>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Participation ce mois</div>
                      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>8 séances</div>
                      <div style={{ fontSize: '0.75rem', color: '#10b981' }}>+2 vs mois dernier</div>
                    </div>
                    
                    <div style={{
                      padding: '1rem',
                      backgroundColor: '#f9fafb',
                      borderRadius: '0.5rem',
                      marginBottom: '1rem'
                    }}>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Taux de présence</div>
                      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>89%</div>
                      <div style={{ fontSize: '0.75rem', color: '#10b981' }}>Excellent</div>
                    </div>

                    <div style={{
                      padding: '1rem',
                      backgroundColor: '#f9fafb',
                      borderRadius: '0.5rem'
                    }}>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Dernière activité</div>
                      <div style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937' }}>
                        {new Date(selectedMember.lastActivity).toLocaleDateString('fr-FR')}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Il y a 4 jours</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Onglet Abonnement */}
            {activeTab === 'subscription' && (
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>
                      Abonnement actuel
                    </h4>
                    <div style={{
                      padding: '1.5rem',
                      border: '2px solid #3b82f6',
                      borderRadius: '0.75rem',
                      backgroundColor: '#dbeafe'
                    }}>
                      <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '0.5rem' }}>
                        {selectedMember.subscription === 'pass_equilibre' ? 'PASS Équilibre' : 
                         selectedMember.subscription === 'pass_evolution' ? 'PASS Évolution' : 
                         'Programme Activation'}
                      </div>
                      <div style={{ color: '#3b82f6', marginBottom: '1rem' }}>
                        {selectedMember.subscription === 'pass_equilibre' ? '15€/mois • 40 séances/an' : 
                         selectedMember.subscription === 'pass_evolution' ? '30€/mois • 156 séances/an' : 
                         '50€ unique • 5 semaines'}
                      </div>
                      <div style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        backgroundColor: selectedMember.subscriptionStatus === 'active' ? '#10b981' : '#ef4444',
                        color: 'white'
                      }}>
                        {selectedMember.subscriptionStatus === 'active' ? 'Actif' : 'Expiré'}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>
                      Quotas d'utilisation
                    </h4>
                    <div style={{ space: '1rem' }}>
                      <div style={{
                        padding: '1rem',
                        backgroundColor: '#f9fafb',
                        borderRadius: '0.5rem',
                        marginBottom: '1rem'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                          <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Cette semaine</span>
                          <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>
                            {selectedMember.quotaWeekly.used}/{selectedMember.quotaWeekly.max}
                          </span>
                        </div>
                        <div style={{
                          width: '100%',
                          height: '8px',
                          backgroundColor: '#e5e7eb',
                          borderRadius: '4px',
                          overflow: 'hidden'
                        }}>
                          <div style={{
                            width: `${(selectedMember.quotaWeekly.used / selectedMember.quotaWeekly.max) * 100}%`,
                            height: '100%',
                            backgroundColor: '#3b82f6'
                          }} />
                        </div>
                      </div>

                      <div style={{
                        padding: '1rem',
                        backgroundColor: '#f9fafb',
                        borderRadius: '0.5rem'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                          <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Cette année</span>
                          <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>
                            {selectedMember.quotaAnnual.used}/{selectedMember.quotaAnnual.max}
                          </span>
                        </div>
                        <div style={{
                          width: '100%',
                          height: '8px',
                          backgroundColor: '#e5e7eb',
                          borderRadius: '4px',
                          overflow: 'hidden'
                        }}>
                          <div style={{
                            width: `${(selectedMember.quotaAnnual.used / selectedMember.quotaAnnual.max) * 100}%`,
                            height: '100%',
                            backgroundColor: '#10b981'
                          }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions sur l'abonnement */}
                <div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>
                    Actions sur l'abonnement
                  </h4>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <button style={{
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      border: 'none',
                      borderRadius: '0.5rem',
                      cursor: 'pointer'
                    }}>
                      Changer d'abonnement
                    </button>
                    <button style={{
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#10b981',
                      color: 'white',
                      border: 'none',
                      borderRadius: '0.5rem',
                      cursor: 'pointer'
                    }}>
                      Ajouter des séances
                    </button>
                    <button style={{
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#f59e0b',
                      color: 'white',
                      border: 'none',
                      borderRadius: '0.5rem',
                      cursor: 'pointer'
                    }}>
                      Suspendre temporairement
                    </button>
                    <button style={{
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#ef4444',
                      color: 'white',
                      border: 'none',
                      borderRadius: '0.5rem',
                      cursor: 'pointer'
                    }}>
                      Résilier
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Onglet Séances */}
            {activeTab === 'sessions' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', margin: 0 }}>
                    Historique des séances
                  </h4>
                  <button style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    cursor: 'pointer'
                  }}>
                    Inscrire à une séance
                  </button>
                </div>

                <div style={{ overflow: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#f9fafb' }}>
                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Date</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Séance</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Coach</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Statut</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sessionHistory.map((session, index) => (
                        <tr key={session.id} style={{ 
                          borderBottom: '1px solid #e5e7eb',
                          backgroundColor: index % 2 === 0 ? 'white' : '#f9fafb'
                        }}>
                          <td style={{ padding: '0.75rem' }}>
                            {new Date(session.date).toLocaleDateString('fr-FR')}
                          </td>
                          <td style={{ padding: '0.75rem', fontWeight: '500' }}>
                            {session.type}
                          </td>
                          <td style={{ padding: '0.75rem', color: '#6b7280' }}>
                            {session.coach}
                          </td>
                          <td style={{ padding: '0.75rem' }}>
                            <span style={{
                              display: 'inline-block',
                              padding: '0.25rem 0.75rem',
                              borderRadius: '9999px',
                              fontSize: '0.75rem',
                              fontWeight: '500',
                              backgroundColor: session.status === 'present' ? '#dcfce7' : '#fee2e2',
                              color: session.status === 'present' ? '#166534' : '#dc2626'
                            }}>
                              {session.status === 'present' ? 'Présent' : 'Absent'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Onglet Paiements */}
            {activeTab === 'payments' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', margin: 0 }}>
                    Historique des paiements
                  </h4>
                  <button style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#10b981',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    cursor: 'pointer'
                  }}>
                    Ajouter un paiement
                  </button>
                </div>

                <div style={{ overflow: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#f9fafb' }}>
                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Date</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Montant</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Type</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Période</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Statut</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paymentHistory.map((payment, index) => (
                        <tr key={payment.id} style={{ 
                          borderBottom: '1px solid #e5e7eb',
                          backgroundColor: index % 2 === 0 ? 'white' : '#f9fafb'
                        }}>
                          <td style={{ padding: '0.75rem' }}>
                            {new Date(payment.date).toLocaleDateString('fr-FR')}
                          </td>
                          <td style={{ padding: '0.75rem', fontWeight: '600', color: '#10b981' }}>
                            {payment.amount}
                          </td>
                          <td style={{ padding: '0.75rem' }}>
                            {payment.type}
                          </td>
                          <td style={{ padding: '0.75rem', color: '#6b7280' }}>
                            {payment.period}
                          </td>
                          <td style={{ padding: '0.75rem' }}>
                            <span style={{
                              display: 'inline-block',
                              padding: '0.25rem 0.75rem',
                              borderRadius: '9999px',
                              fontSize: '0.75rem',
                              fontWeight: '500',
                              backgroundColor: '#dcfce7',
                              color: '#166534'
                            }}>
                              {payment.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Onglet Documents */}
            {activeTab === 'documents' && (
              <div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1.5rem', color: '#1f2937' }}>
                  Documents et certificats
                </h4>

                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  {/* Certificat médical */}
                  <div style={{
                    padding: '1.5rem',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.75rem'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <h5 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937', margin: 0 }}>
                        🏥 Certificat médical
                      </h5>
                      <span style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        backgroundColor: selectedMember.medicalCertificate === 'valide' ? '#dcfce7' : 
                                       {selectedMember.medicalCertificate === 'valide' ? 'Valide' : 
                         selectedMember.medicalCertificate === 'expire_bientot' ? 'Expire bientôt' : 'Manquant'}
                      </span>
                    </div>
                    <div style={{ color: '#6b7280', marginBottom: '1rem' }}>
                      {selectedMember.medicalCertificate === 'valide' ? 'Certificat valide jusqu\'au 15 janvier 2026' :
                       selectedMember.medicalCertificate === 'expire_bientot' ? 'Expire le 30 juillet 2025 - Renouvellement requis' :
                       'Aucun certificat médical enregistré'}
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        border: 'none',
                        borderRadius: '0.375rem',
                        cursor: 'pointer',
                        fontSize: '0.875rem'
                      }}>
                        {selectedMember.medicalCertificate === 'manquant' ? 'Ajouter' : 'Voir le document'}
                      </button>
                      {selectedMember.medicalCertificate !== 'manquant' && (
                        <button style={{
                          padding: '0.5rem 1rem',
                          backgroundColor: '#10b981',
                          color: 'white',
                          border: 'none',
                          borderRadius: '0.375rem',
                          cursor: 'pointer',
                          fontSize: '0.875rem'
                        }}>
                          Renouveler
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Photo d'identité */}
                  <div style={{
                    padding: '1.5rem',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.75rem'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <h5 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937', margin: 0 }}>
                        📸 Photo d'identité
                      </h5>
                      <span style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        backgroundColor: '#dcfce7',
                        color: '#166534'
                      }}>
                        Disponible
                      </span>
                    </div>
                    <div style={{ color: '#6b7280', marginBottom: '1rem' }}>
                      Photo ajoutée le 15 janvier 2024
                    </div>
                    <button style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      border: 'none',
                      borderRadius: '0.375rem',
                      cursor: 'pointer',
                      fontSize: '0.875rem'
                    }}>
                      Voir la photo
                    </button>
                  </div>

                  {/* Fiche d'inscription */}
                  <div style={{
                    padding: '1.5rem',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.75rem'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <h5 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937', margin: 0 }}>
                        📋 Fiche d'inscription
                      </h5>
                      <span style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        backgroundColor: '#dcfce7',
                        color: '#166534'
                      }}>
                        Complète
                      </span>
                    </div>
                    <div style={{ color: '#6b7280', marginBottom: '1rem' }}>
                      Fiche signée le {new Date(selectedMember.joinDate).toLocaleDateString('fr-FR')}
                    </div>
                    <button style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      border: 'none',
                      borderRadius: '0.375rem',
                      cursor: 'pointer',
                      fontSize: '0.875rem'
                    }}>
                      Télécharger PDF
                    </button>
                  </div>

                  {/* Zone d'upload */}
                  <div style={{
                    padding: '2rem',
                    border: '2px dashed #d1d5db',
                    borderRadius: '0.75rem',
                    textAlign: 'center',
                    backgroundColor: '#f9fafb'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📁</div>
                    <h5 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                      Ajouter un document
                    </h5>
                    <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '0.875rem' }}>
                      Glissez-déposez un fichier ou cliquez pour parcourir
                    </p>
                    <button style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      border: 'none',
                      borderRadius: '0.375rem',
                      cursor: 'pointer',
                      fontSize: '0.875rem'
                    }}>
                      Parcourir les fichiers
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer du modal */}
          <div style={{
            padding: '1.5rem',
            borderTop: '1px solid #e5e7eb',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                fontSize: '0.875rem'
              }}>
                📧 Envoyer un email
              </button>
              <button style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#8b5cf6',
                color: 'white',
                border: 'none',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                fontSize: '0.875rem'
              }}>
                📱 Envoyer un SMS
              </button>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => setShowMemberModal(false)}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#6b7280',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.375rem',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >
                Fermer
              </button>
              <button style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                fontSize: '0.875rem'
              }}>
                Enregistrer les modifications
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };ientot' ? '#fef3c7' : '#fee2e2',
                        color: selectedMember.medicalCertificate === 'valide' ? '#166534' : 
                               selectedMember.medicalCertificate === 'expire_bientot' ? '#92400e' : '#dc2626'
                      }}>
                        {selectedMember.medicalCertificate === 'valide' ? 'Valide' : 
                         selectedMember.medicalCertificate === 'expire_bimport React, { useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('login');
  const [showModal, setShowModal] = useState(null);

  // Données membres simulées (en attendant Supabase)
  const [members] = useState([
    { 
      id: 1, 
      name: 'Jean Martin', 
      email: 'jean.martin@email.com', 
      phone: '06 12 34 56 78',
      subscription: 'pass_equilibre',
      subscriptionStatus: 'active',
      joinDate: '2024-01-15',
      quotaWeekly: { used: 2, max: 3 },
      quotaAnnual: { used: 12, max: 40 },
      medicalCertificate: 'valide',
      lastActivity: '2025-06-25'
    },
    { 
      id: 2, 
      name: 'Alice Moreau', 
      email: 'alice.moreau@email.com', 
      phone: '06 98 76 54 32',
      subscription: 'pass_evolution',
      subscriptionStatus: 'active',
      joinDate: '2024-03-20',
      quotaWeekly: { used: 1, max: 6 },
      quotaAnnual: { used: 28, max: 156 },
      medicalCertificate: 'expire_bientot',
      lastActivity: '2025-06-28'
    },
    { 
      id: 3, 
      name: 'Pierre Durand', 
      email: 'pierre.durand@email.com', 
      phone: '06 55 44 33 22',
      subscription: 'programme_activation',
      subscriptionStatus: 'active',
      joinDate: '2025-06-01',
      quotaWeekly: { used: 3, max: 999 },
      quotaAnnual: { used: 8, max: 999 },
      medicalCertificate: 'manquant',
      lastActivity: '2025-06-27'
    },
    { 
      id: 4, 
      name: 'Sophie Laurent', 
      email: 'sophie.laurent@email.com', 
      phone: '06 11 22 33 44',
      subscription: 'pass_equilibre',
      subscriptionStatus: 'expired',
      joinDate: '2023-08-10',
      quotaWeekly: { used: 0, max: 0 },
      quotaAnnual: { used: 35, max: 40 },
      medicalCertificate: 'valide',
      lastActivity: '2025-05-15'
    }
  ]);

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

  // Page de gestion des membres
  const MembersPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [selectedMember, setSelectedMember] = useState(null);
    const [showMemberModal, setShowMemberModal] = useState(false);

    const filteredMembers = members.filter(member => {
      const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           member.email.toLowerCase().includes(searchTerm.toLowerCase());
      
      if (filterStatus === 'all') return matchesSearch;
      if (filterStatus === 'active') return matchesSearch && member.subscriptionStatus === 'active';
      if (filterStatus === 'expired') return matchesSearch && member.subscriptionStatus === 'expired';
      return matchesSearch;
    });

    const getSubscriptionLabel = (subscription) => {
      switch(subscription) {
        case 'pass_equilibre': return 'PASS Équilibre';
        case 'pass_evolution': return 'PASS Évolution';
        case 'programme_activation': return 'Programme Activation';
        default: return subscription;
      }
    };

    const getCertificateStatus = (status) => {
      switch(status) {
        case 'valide': return { text: 'Valide', color: '#10b981' };
        case 'expire_bientot': return { text: 'Expire bientôt', color: '#f59e0b' };
        case 'manquant': return { text: 'Manquant', color: '#ef4444' };
        default: return { text: 'Inconnu', color: '#6b7280' };
      }
    };

    return (
      <div>
        {/* Header avec navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => setCurrentPage('dashboard')}
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.5rem',
                backgroundColor: 'white',
                cursor: 'pointer'
              }}
            >
              ← Retour
            </button>
            <h3 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
              👥 Gestion des membres ({filteredMembers.length})
            </h3>
          </div>
          <button style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer'
          }}>
            ➕ Nouveau membre
          </button>
        </div>

        {/* Filtres et recherche */}
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '0.75rem',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          marginBottom: '1.5rem'
        }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <input
              type="text"
              placeholder="Rechercher un membre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                flex: 1,
                minWidth: '200px',
                padding: '0.5rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.5rem'
              }}
            />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              style={{
                padding: '0.5rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.5rem'
              }}
            >
              <option value="all">Tous les statuts</option>
              <option value="active">Abonnés actifs</option>
              <option value="expired">Abonnements expirés</option>
            </select>
          </div>
        </div>

        {/* Liste des membres */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '0.75rem',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          overflow: 'hidden'
        }}>
          <div style={{ overflow: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ backgroundColor: '#f9fafb' }}>
                <tr>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Membre</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Abonnement</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Quotas</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Certificat</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((member, index) => {
                  const certStatus = getCertificateStatus(member.medicalCertificate);
                  return (
                    <tr key={member.id} style={{ 
                      borderBottom: '1px solid #e5e7eb',
                      backgroundColor: index % 2 === 0 ? 'white' : '#f9fafb'
                    }}>
                      <td style={{ padding: '1rem' }}>
                        <div>
                          <div style={{ fontWeight: '600', color: '#1f2937' }}>{member.name}</div>
                          <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{member.email}</div>
                          <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{member.phone}</div>
                        </div>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <div>
                          <div style={{
                            display: 'inline-block',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '9999px',
                            fontSize: '0.75rem',
                            fontWeight: '500',
                            backgroundColor: member.subscriptionStatus === 'active' ? '#dcfce7' : '#fee2e2',
                            color: member.subscriptionStatus === 'active' ? '#166534' : '#dc2626'
                          }}>
                            {getSubscriptionLabel(member.subscription)}
                          </div>
                          <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.25rem' }}>
                            Membre depuis {new Date(member.joinDate).toLocaleDateString('fr-FR')}
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <div style={{ fontSize: '0.875rem' }}>
                          <div style={{ marginBottom: '0.25rem' }}>
                            <span style={{ color: '#6b7280' }}>Semaine: </span>
                            <span style={{ fontWeight: '600' }}>
                              {member.quotaWeekly.used}/{member.quotaWeekly.max}
                            </span>
                          </div>
                          <div>
                            <span style={{ color: '#6b7280' }}>Année: </span>
                            <span style={{ fontWeight: '600' }}>
                              {member.quotaAnnual.used}/{member.quotaAnnual.max}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <span style={{
                          display: 'inline-block',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '9999px',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          backgroundColor: certStatus.color + '20',
                          color: certStatus.color
                        }}>
                          {certStatus.text}
                        </span>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button 
                            onClick={() => {
                              setSelectedMember(member);
                              setShowMemberModal(true);
                            }}
                            style={{
                              padding: '0.5rem 1rem',
                              backgroundColor: '#3b82f6',
                              color: 'white',
                              border: 'none',
                              borderRadius: '0.375rem',
                              cursor: 'pointer',
                              fontSize: '0.875rem'
                            }}>
                            Voir profil
                          </button>
                          <button style={{
                            padding: '0.5rem',
                            backgroundColor: '#10b981',
                            color: 'white',
                            border: 'none',
                            borderRadius: '0.375rem',
                            cursor: 'pointer',
                            fontSize: '0.875rem'
                          }}>
                            📧
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  // Page de planning des séances
  const CalendarPage = () => {
    const [currentWeek, setCurrentWeek] = useState(0);
    
    const getWeekDates = (weekOffset) => {
      const today = new Date();
      const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + weekOffset * 7));
      const dates = [];
      for (let i = 0; i < 7; i++) {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);
        dates.push(date);
      }
      return dates;
    };

    const weekDates = getWeekDates(currentWeek);

    return (
      <div>
        {/* Header avec navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => setCurrentPage('dashboard')}
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.5rem',
                backgroundColor: 'white',
                cursor: 'pointer'
              }}
            >
              ← Retour
            </button>
            <h3 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
              📅 Planning des séances
            </h3>
          </div>
          <button style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer'
          }}>
            ➕ Nouvelle séance
          </button>
        </div>

        {/* Navigation semaine */}
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '0.75rem',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          marginBottom: '1.5rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <button
              onClick={() => setCurrentWeek(currentWeek - 1)}
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.5rem',
                backgroundColor: 'white',
                cursor: 'pointer'
              }}
            >
              ← Semaine précédente
            </button>
            
            <h4 style={{ fontSize: '1.25rem', fontWeight: '600', margin: 0 }}>
              {weekDates[0].toLocaleDateString('fr-FR', { day: '2-digit', month: 'long' })} - {weekDates[6].toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </h4>
            
            <button
              onClick={() => setCurrentWeek(currentWeek + 1)}
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.5rem',
                backgroundColor: 'white',
                cursor: 'pointer'
              }}
            >
              Semaine suivante →
            </button>
          </div>

          {/* Calendrier */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1rem' }}>
            {weekDates.map((date, index) => {
              const dayName = date.toLocaleDateString('fr-FR', { weekday: 'short' });
              const dayNumber = date.getDate();
              const isToday = date.toDateString() === new Date().toDateString();
              
              return (
                <div key={index} style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.5rem',
                  padding: '1rem',
                  minHeight: '200px',
                  backgroundColor: isToday ? '#dbeafe' : 'white'
                }}>
                  <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                    <div style={{ 
                      fontWeight: '600', 
                      color: isToday ? '#1e40af' : '#374151' 
                    }}>
                      {dayName}
                    </div>
                    <div style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold',
                      color: isToday ? '#1e40af' : '#1f2937'
                    }}>
                      {dayNumber}
                    </div>
                    {isToday && (
                      <div style={{
                        fontSize: '0.75rem',
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '9999px',
                        marginTop: '0.25rem'
                      }}>
                        Aujourd'hui
                      </div>
                    )}
                  </div>
                  
                  {/* Séances du jour (exemple) */}
                  {index === 1 && (
                    <div style={{
                      backgroundColor: '#dbeafe',
                      padding: '0.5rem',
                      borderRadius: '0.375rem',
                      marginBottom: '0.5rem'
                    }}>
                      <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1e40af' }}>10:00</div>
                      <div style={{ fontSize: '0.75rem', color: '#3b82f6' }}>Aquagym</div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>8/15 inscrits</div>
                    </div>
                  )}
                  
                  {index === 3 && (
                    <>
                      <div style={{
                        backgroundColor: '#dcfce7',
                        padding: '0.5rem',
                        borderRadius: '0.375rem',
                        marginBottom: '0.5rem'
                      }}>
                        <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#166534' }}>09:00</div>
                        <div style={{ fontSize: '0.75rem', color: '#16a34a' }}>Marche Nordique</div>
                        <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>12/20 inscrits</div>
                      </div>
                      <div style={{
                        backgroundColor: '#fef3c7',
                        padding: '0.5rem',
                        borderRadius: '0.375rem'
                      }}>
                        <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#92400e' }}>18:00</div>
                        <div style={{ fontSize: '0.75rem', color: '#d97706' }}>Renforcement</div>
                        <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>6/12 inscrits</div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
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

      {/* Main Content */}
      <main style={{ padding: '2rem' }}>
        {currentUser.role === 'admin' ? (
          <div>
            {currentPage === 'dashboard' && (
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
                    <button 
                      onClick={() => setCurrentPage('members')}
                      style={{
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

                    <button 
                      onClick={() => setShowModal('validatePayment')}
                      style={{
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

                    <button 
                      onClick={() => setCurrentPage('calendar')}
                      style={{
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

                    <button 
                      onClick={() => setShowModal('freeAccess')}
                      style={{
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
            )}

            {currentPage === 'members' && <MembersPage />}
            {currentPage === 'calendar' && <CalendarPage />}
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
          </div>
        )}
      </main>
    </div>
  );
}

export default App;