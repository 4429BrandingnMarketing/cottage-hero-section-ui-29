export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      about_accordion: {
        Row: {
          content: string
          created_at: string | null
          id: string
          order_index: number
          title: string
          updated_at: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          order_index: number
          title: string
          updated_at?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          order_index?: number
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      ai_agents: {
        Row: {
          created_at: string
          division_id: string | null
          id: string
          name: string
          performance_score: number | null
          status: string
          task_description: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          division_id?: string | null
          id?: string
          name: string
          performance_score?: number | null
          status: string
          task_description?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          division_id?: string | null
          id?: string
          name?: string
          performance_score?: number | null
          status?: string
          task_description?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_agents_division_id_fkey"
            columns: ["division_id"]
            isOneToOne: false
            referencedRelation: "business_divisions"
            referencedColumns: ["id"]
          },
        ]
      }
      artists: {
        Row: {
          created_at: string | null
          genre: string
          id: string
          image_url: string | null
          name: string
          streams: string | null
          updated_at: string | null
          verified: boolean | null
        }
        Insert: {
          created_at?: string | null
          genre: string
          id?: string
          image_url?: string | null
          name: string
          streams?: string | null
          updated_at?: string | null
          verified?: boolean | null
        }
        Update: {
          created_at?: string | null
          genre?: string
          id?: string
          image_url?: string | null
          name?: string
          streams?: string | null
          updated_at?: string | null
          verified?: boolean | null
        }
        Relationships: []
      }
      business_divisions: {
        Row: {
          created_at: string
          description: string
          icon: string
          id: string
          name: string
          primary_action: string
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          icon: string
          id?: string
          name: string
          primary_action: string
          status: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          icon?: string
          id?: string
          name?: string
          primary_action?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      company_features: {
        Row: {
          created_at: string | null
          icon: string
          id: string
          order_index: number
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          icon: string
          id?: string
          order_index: number
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          icon?: string
          id?: string
          order_index?: number
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      company_info: {
        Row: {
          created_at: string | null
          heading: string
          id: string
          section: string
          subheading: string
          updated_at: string | null
          video_url: string | null
        }
        Insert: {
          created_at?: string | null
          heading: string
          id?: string
          section: string
          subheading: string
          updated_at?: string | null
          video_url?: string | null
        }
        Update: {
          created_at?: string | null
          heading?: string
          id?: string
          section?: string
          subheading?: string
          updated_at?: string | null
          video_url?: string | null
        }
        Relationships: []
      }
      division_metrics: {
        Row: {
          created_at: string
          division_id: string
          id: string
          label: string
          updated_at: string
          value: string
        }
        Insert: {
          created_at?: string
          division_id: string
          id?: string
          label: string
          updated_at?: string
          value: string
        }
        Update: {
          created_at?: string
          division_id?: string
          id?: string
          label?: string
          updated_at?: string
          value?: string
        }
        Relationships: [
          {
            foreignKeyName: "division_metrics_division_id_fkey"
            columns: ["division_id"]
            isOneToOne: false
            referencedRelation: "business_divisions"
            referencedColumns: ["id"]
          },
        ]
      }
      empire_metrics: {
        Row: {
          created_at: string
          icon: string
          id: string
          subtitle: string | null
          title: string
          trend_is_positive: boolean | null
          trend_value: number | null
          updated_at: string
          value: string
        }
        Insert: {
          created_at?: string
          icon: string
          id?: string
          subtitle?: string | null
          title: string
          trend_is_positive?: boolean | null
          trend_value?: number | null
          updated_at?: string
          value: string
        }
        Update: {
          created_at?: string
          icon?: string
          id?: string
          subtitle?: string | null
          title?: string
          trend_is_positive?: boolean | null
          trend_value?: number | null
          updated_at?: string
          value?: string
        }
        Relationships: []
      }
      founder_profile: {
        Row: {
          created_at: string | null
          id: string
          name: string
          quote: string
          title: string
          updated_at: string | null
          video_url: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          quote: string
          title: string
          updated_at?: string | null
          video_url?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          quote?: string
          title?: string
          updated_at?: string | null
          video_url?: string | null
        }
        Relationships: []
      }
      gallery_items: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          media_type: string
          media_url: string
          order_index: number
          title: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          media_type: string
          media_url: string
          order_index: number
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          media_type?: string
          media_url?: string
          order_index?: number
          title?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      marketing_benefits: {
        Row: {
          benefit: string
          created_at: string | null
          id: string
          order_index: number
          updated_at: string | null
        }
        Insert: {
          benefit: string
          created_at?: string | null
          id?: string
          order_index?: number
          updated_at?: string | null
        }
        Update: {
          benefit?: string
          created_at?: string | null
          id?: string
          order_index?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      marketing_services: {
        Row: {
          created_at: string | null
          description: string
          icon: string
          id: string
          order_index: number
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          icon?: string
          id?: string
          order_index?: number
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          icon?: string
          id?: string
          order_index?: number
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      marketing_stats: {
        Row: {
          created_at: string | null
          id: string
          label: string
          order_index: number
          updated_at: string | null
          value: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          label: string
          order_index?: number
          updated_at?: string | null
          value: string
        }
        Update: {
          created_at?: string | null
          id?: string
          label?: string
          order_index?: number
          updated_at?: string | null
          value?: string
        }
        Relationships: []
      }
      services: {
        Row: {
          created_at: string | null
          description: string
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      submissions: {
        Row: {
          artist_name: string
          created_at: string | null
          email: string
          id: string
          message: string | null
          track_url: string
          updated_at: string | null
        }
        Insert: {
          artist_name: string
          created_at?: string | null
          email: string
          id?: string
          message?: string | null
          track_url: string
          updated_at?: string | null
        }
        Update: {
          artist_name?: string
          created_at?: string | null
          email?: string
          id?: string
          message?: string | null
          track_url?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      tracks: {
        Row: {
          artist: string
          created_at: string | null
          id: string
          plays: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          artist: string
          created_at?: string | null
          id?: string
          plays?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          artist?: string
          created_at?: string | null
          id?: string
          plays?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
