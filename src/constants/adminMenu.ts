let array: any = [
  {
    label: "Conta",
    icon: "account",
    value: "account",
    children: [
      {
        label: "Faturas",
        value: "bills",
        to: "55pbx_purchase_history"
      },
      {
        label: "Assinatura",
        value: "signature",
        to: "55pbx_purchase_signature"
      },
      {
        label: "Extato Ligações",
        value: "callExtract",
        to: "55pbx_call_history_financial"
      },
      {
        label: "Alertas",
        value: "alerts",
        to: "55pbx_general_settings_pbx"
      },
      {
        label: "Softphone",
        value: "softphone",
        to: "55pbx_softphones"
      },
    ]
  },
  {
    label: "Configurações",
    icon: "config",
    value: "config",
    children: [
      {
        label: "Ramais",
        value: "branchs",
        to: "55pbx_settings_branch_number"
      },
      {
        label: "Central de Atendimento",
        value: "attendanceCentral", 
        children: [
          {
            label: "Menu de Voz (URA)",
            value: "branchs",
            to: "55pbx_settings_electronic_menu"
          },
          {
            label: "Fila",
            value: "queue",
            to: "55pbx_settings_queue"
          },
          {
            label: "Questionário",
            value: "quiz",
            to: "55pbx_settings_attendance_quality"
          },
          {
            label: "Webcall",
            value: "webcall",
            to: "55pbx_webcall_settings"
          },
          {
            label: "Chat",
            value: "chat",
            to: "55pbx_call_settings"
          },
          {
            label: "Feriados",
            value: "holidays",
            to: "55pbx_settings_new_holiday_list"
          },
          {
            label: "Música(s) de Espera",
            value: "waitingMusic",
            to: "55pbx_waiting_music_settings_pbx"
          }
        ]
      },
      {
        label: "Modelo de Trabalho",
        value: "callExtract",
        children: [
          {
            label: "Lista de pausas",
            value: "pauseList",
            to: "55pbx_operation_settings_pause_list_pbx"
          },
          {
            label: "Grupo de supervisão",
            value: "pauseList",
            to: "55pbx_operation_settings_supervisor_group_pbx"
          },
          {
            label: "Escala de Trabalho",
            value: "pauseList",
            to: "55pbx_operation_settings_work_model_pbx"
          }
        ]
      },
      {
        label: "Configuração Geográfica",
        value: "geoConfigs",
        to: "55pbx_settings_geographics_controller"
      },
      {
        label: "Segurança",
        value: "security",
        to: "55pbx_settings_security_ip"
      },
      {
        label: "Auditoria",
        value: "audit",
        to: "55pbx_audit"
      }
    ]
  },
  {
    label: "Enterprise",
    icon: "enterprise",
    value: "enterprise",
    children: [
      {
        label: "Active Directory",
        value: "ad",
        to: "55pbx_active_directory_form"
      },
      {
        label: "Discadora",
        value: "dialler", 
        children: [
          {
            label: "Lista de Contatos",
            value: "contactList",
            to: "55pbx_dialer_list_view"
          },
          {
            label: "Lista de Bloquei de Contatos",
            value: "contactBlockList",
            to: "55pbx_dialer_black_list"
          },
          {
            label: "Campanhas",
            value: "campaing",
            to: "55pbx_dialer_campaign"
          }
        ]
      },
      {
        label: "Formulários",
        value: "forms",
        to: "55pbx_dialer_form_list"
      },
      {
        label: "Template",
        value: "template",
        to: "55pbx_message_template"
      },
      {
        label: "Sala de Conferência",
        value: "conferenceRoom",
        to: "55pbx_conference_room_list"
      },
      {
        label: "Televendas",
        value: "telesales",
        to: "55pbx_URASegura"
      },
      {
        label: "Transcrição de Chamadas",
        value: "callTranscriptions",
        to: "55pbx_transcription"
      },
      {
        label: "SIP Trunk",
        value: "sipTrunk",
        to: "55pbx_list_sip_trunk"
      },
      {
        label: "Mailing",
        value: "mailing",
        to: "55pbx_mailing_list"
      }
    ]
  },
  {
    label: "Relatórios",
    icon: "report",
    value: "report",
    children: [
      {
        label: "Ligações",
        value: "calls",
        to: "55pbx_call_history_all"
      },      
      {
        label: "Tempo Real",
        value: "realtime",
        to: "55pbx_realtime_report"
      },
      {
        label: "Métricas",
        value: "metrics",
        to: "55pbx_metrics"
      },
      {
        label: "Wallboard",
        value: "wallboard",
        to: "55pbx_wallboard"
      }
    ]
  },
  {
    label: "Integrações",
    icon: "integration",
    value: "integration",
    children: [
      {
        label: "Webhook (API)",
        value: "webhook",
        to: "55pbx_integration_endpoint"
      },      
      {
        label: "Webservice (API)",
        value: "webservice",
        to: "55pbx_integration_webservice"
      },
      {
        label: "Zendesk",
        value: "zendesk",
        to: "55pbx_integration_new_zendesk"
      },
      {
        label: "Zapier",
        value: "zapier",
        to: "55pbx_integration_zapier"
      },
      {
        label: "Pipedrive",
        value: "pipedrive",
        to: "55pbx_integration_pipedrive"
      },
      {
        label: "Freshdesk",
        value: "freshdesk",
        to: "55pbx_integration_freshdesk"
      },
      {
        label: "Hubspot",
        value: "hubspot",
        to: "55pbx_integration_hubspot"
      },
      {
        label: "Webcall",
        value: "webcall",
        to: "55pbx_settings_webcall"
      },
      {
        label: "Chat",
        value: "chat",
        to: "55pbx_settings_chat"
      },
      {
        label: "Geral (Novo)",
        value: "general",
        to: "55pbx_integration_list"
      }
    ]
  },
  {
    label: "Conta",
    icon: "disponibility",
    value: "disponibility",
    to: "55pbx_client_status"
  }
]

export default array