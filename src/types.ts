export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  licence_number?: string;
  role?: string;
  user_type?: {
    id: number;
    name: string;
  };
  created_at?: string;
  updated_at?: string;
}

export interface Team {
  id: number;
  name: string;
  category: string | Category;
  category_id?: number;
  season_id?: number;
  coach_id?: number;
  coach?: User;
  created_at?: string;
  updated_at?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
}

export interface DashboardStats {
  totalUsers: number;
  activeTeams: number;
  matchesThisMonth: number;
  upcomingEventsCount: number;
  upcomingEvents: Array<{
    title: string;
    start_at: string;
    end_at?: string;
  }>;
}

export interface Category {
  id: number;
  name: string;
  created_at?: string;
  updated_at?: string;
}

export interface Season {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  is_current: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Event {
  id: number;
  title: string;
  description?: string;
  start_at: string;
  end_at?: string;
  location?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Match {
  id: number;
  home_team_id: number;
  away_team_id: number;
  home_score?: number;
  away_score?: number;
  date: string;
  location?: string;
  created_at?: string;
  updated_at?: string;
}
