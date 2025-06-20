export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      activities: {
        Row: {
          completed_manually: boolean | null
          created_at: string
          description: string | null
          id: string
          predicted_end_date: string
          start_date: string
          status: string
          title: string
          topic: string
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_manually?: boolean | null
          created_at?: string
          description?: string | null
          id?: string
          predicted_end_date: string
          start_date: string
          status?: string
          title: string
          topic: string
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_manually?: boolean | null
          created_at?: string
          description?: string | null
          id?: string
          predicted_end_date?: string
          start_date?: string
          status?: string
          title?: string
          topic?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      application_updates: {
        Row: {
          application_id: string
          created_at: string
          details: string
          id: string
          timestamp: string
          update_date: string | null
          update_type: string
        }
        Insert: {
          application_id: string
          created_at?: string
          details: string
          id?: string
          timestamp?: string
          update_date?: string | null
          update_type: string
        }
        Update: {
          application_id?: string
          created_at?: string
          details?: string
          id?: string
          timestamp?: string
          update_date?: string | null
          update_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "application_updates_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "job_applications"
            referencedColumns: ["id"]
          },
        ]
      }
      course_elements: {
        Row: {
          course_order: number
          created_at: string
          description: string | null
          folder_id: string
          google_drive_link: string | null
          id: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          course_order?: number
          created_at?: string
          description?: string | null
          folder_id: string
          google_drive_link?: string | null
          id?: string
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          course_order?: number
          created_at?: string
          description?: string | null
          folder_id?: string
          google_drive_link?: string | null
          id?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_elements_folder_id_fkey"
            columns: ["folder_id"]
            isOneToOne: false
            referencedRelation: "course_folders"
            referencedColumns: ["id"]
          },
        ]
      }
      course_folders: {
        Row: {
          created_at: string
          id: string
          name: string
          parent_folder_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          parent_folder_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          parent_folder_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_folders_parent_folder_id_fkey"
            columns: ["parent_folder_id"]
            isOneToOne: false
            referencedRelation: "course_folders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_course_folders_parent"
            columns: ["parent_folder_id"]
            isOneToOne: false
            referencedRelation: "course_folders"
            referencedColumns: ["id"]
          },
        ]
      }
      courses: {
        Row: {
          course_link: string | null
          created_at: string
          github_link: string | null
          id: string
          provider_name: string | null
          status: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          course_link?: string | null
          created_at?: string
          github_link?: string | null
          id?: string
          provider_name?: string | null
          status?: string
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          course_link?: string | null
          created_at?: string
          github_link?: string | null
          id?: string
          provider_name?: string | null
          status?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      doubt_folders: {
        Row: {
          created_at: string
          id: string
          name: string
          parent_folder_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          parent_folder_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          parent_folder_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "doubt_folders_parent_folder_id_fkey"
            columns: ["parent_folder_id"]
            isOneToOne: false
            referencedRelation: "doubt_folders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_doubt_folders_parent"
            columns: ["parent_folder_id"]
            isOneToOne: false
            referencedRelation: "doubt_folders"
            referencedColumns: ["id"]
          },
        ]
      }
      doubt_questions: {
        Row: {
          created_at: string
          folder_id: string
          id: string
          markdown_content: string | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          folder_id: string
          id?: string
          markdown_content?: string | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          folder_id?: string
          id?: string
          markdown_content?: string | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "doubt_questions_folder_id_fkey"
            columns: ["folder_id"]
            isOneToOne: false
            referencedRelation: "doubt_folders"
            referencedColumns: ["id"]
          },
        ]
      }
      folder_shares: {
        Row: {
          created_at: string
          expires_at: string | null
          folder_id: string
          id: string
          is_active: boolean
          permission_level: string
          share_token: string
          shared_by: string
          shared_with_email: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          expires_at?: string | null
          folder_id: string
          id?: string
          is_active?: boolean
          permission_level?: string
          share_token?: string
          shared_by: string
          shared_with_email: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          expires_at?: string | null
          folder_id?: string
          id?: string
          is_active?: boolean
          permission_level?: string
          share_token?: string
          shared_by?: string
          shared_with_email?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "folder_shares_folder_id_fkey"
            columns: ["folder_id"]
            isOneToOne: false
            referencedRelation: "course_folders"
            referencedColumns: ["id"]
          },
        ]
      }
      job_applications: {
        Row: {
          company_name: string
          created_at: string
          ctc: string | null
          date_applied: string
          id: string
          initial_notes: string | null
          location: string | null
          next_round_date: string | null
          role: string
          rounds_passed: number | null
          status: string
          total_rounds: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          company_name: string
          created_at?: string
          ctc?: string | null
          date_applied: string
          id?: string
          initial_notes?: string | null
          location?: string | null
          next_round_date?: string | null
          role: string
          rounds_passed?: number | null
          status?: string
          total_rounds?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          company_name?: string
          created_at?: string
          ctc?: string | null
          date_applied?: string
          id?: string
          initial_notes?: string | null
          location?: string | null
          next_round_date?: string | null
          role?: string
          rounds_passed?: number | null
          status?: string
          total_rounds?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          id: string
          updated_at: string
          username: string | null
        }
        Insert: {
          created_at?: string
          id: string
          updated_at?: string
          username?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          updated_at?: string
          username?: string | null
        }
        Relationships: []
      }
      resume_folders: {
        Row: {
          created_at: string
          id: string
          name: string
          parent_folder_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          parent_folder_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          parent_folder_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "resume_folders_parent_folder_id_fkey"
            columns: ["parent_folder_id"]
            isOneToOne: false
            referencedRelation: "resume_folders"
            referencedColumns: ["id"]
          },
        ]
      }
      resumes: {
        Row: {
          created_at: string
          custom_name: string
          file_path: string
          folder_id: string | null
          id: string
          original_filename: string
          shareable_expiry: string | null
          shareable_token: string | null
          updated_at: string
          upload_timestamp: string
          user_id: string
        }
        Insert: {
          created_at?: string
          custom_name: string
          file_path: string
          folder_id?: string | null
          id?: string
          original_filename: string
          shareable_expiry?: string | null
          shareable_token?: string | null
          updated_at?: string
          upload_timestamp?: string
          user_id: string
        }
        Update: {
          created_at?: string
          custom_name?: string
          file_path?: string
          folder_id?: string | null
          id?: string
          original_filename?: string
          shareable_expiry?: string | null
          shareable_token?: string | null
          updated_at?: string
          upload_timestamp?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "resumes_folder_id_fkey"
            columns: ["folder_id"]
            isOneToOne: false
            referencedRelation: "resume_folders"
            referencedColumns: ["id"]
          },
        ]
      }
      youtube_folders: {
        Row: {
          created_at: string
          id: string
          name: string
          parent_folder_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          parent_folder_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          parent_folder_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "youtube_folders_parent_folder_id_fkey"
            columns: ["parent_folder_id"]
            isOneToOne: false
            referencedRelation: "youtube_folders"
            referencedColumns: ["id"]
          },
        ]
      }
      youtube_todos: {
        Row: {
          content: string | null
          created_at: string
          folder_id: string
          id: string
          status: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          folder_id: string
          id?: string
          status?: string
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string | null
          created_at?: string
          folder_id?: string
          id?: string
          status?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "youtube_todos_folder_id_fkey"
            columns: ["folder_id"]
            isOneToOne: false
            referencedRelation: "youtube_folders"
            referencedColumns: ["id"]
          },
        ]
      }
      youtube_videos: {
        Row: {
          content: string | null
          created_at: string
          folder_id: string
          id: string
          status: string
          title: string
          updated_at: string
          user_id: string
          youtube_url: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          folder_id: string
          id?: string
          status?: string
          title: string
          updated_at?: string
          user_id: string
          youtube_url?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          folder_id?: string
          id?: string
          status?: string
          title?: string
          updated_at?: string
          user_id?: string
          youtube_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "youtube_videos_folder_id_fkey"
            columns: ["folder_id"]
            isOneToOne: false
            referencedRelation: "youtube_folders"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_folder_shares: {
        Args: { folder_uuid: string }
        Returns: {
          id: string
          shared_with_email: string
          permission_level: string
          is_active: boolean
          expires_at: string
          created_at: string
        }[]
      }
      get_shared_folders_for_user: {
        Args: Record<PropertyKey, never>
        Returns: {
          folder_id: string
          folder_name: string
          shared_by_email: string
          permission_level: string
          shared_at: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
