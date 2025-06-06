
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  loyaltyPoints: number;
  tier: 'Bronze' | 'Prata' | 'Ouro';
  orders: Order[];
}

interface Order {
  id: string;
  date: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  items: any[];
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
  addLoyaltyPoints: (points: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Simular carregamento do usuário do localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simular login - em produção, fazer chamada para API
    if (email === 'admin@offseason.com' && password === 'admin123') {
      const mockUser: User = {
        id: '1',
        name: 'João Silva',
        email: email,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        loyaltyPoints: 1250,
        tier: 'Prata',
        orders: [
          {
            id: 'ORD001',
            date: '2024-01-15',
            total: 249.90,
            status: 'delivered',
            items: []
          },
          {
            id: 'ORD002',
            date: '2024-01-20',
            total: 189.90,
            status: 'shipped',
            items: []
          }
        ]
      };
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return true;
    }
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simular registro
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      loyaltyPoints: 100, // Pontos de boas-vindas
      tier: 'Bronze',
      orders: []
    };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateProfile = (data: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  const addLoyaltyPoints = (points: number) => {
    if (user) {
      const newPoints = user.loyaltyPoints + points;
      let newTier = user.tier;
      
      if (newPoints >= 2000) newTier = 'Ouro';
      else if (newPoints >= 1000) newTier = 'Prata';
      else newTier = 'Bronze';

      updateProfile({ loyaltyPoints: newPoints, tier: newTier });
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      updateProfile,
      addLoyaltyPoints
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
