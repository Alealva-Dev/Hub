// IMAGES
import adminIcon from '../assets/admin.svg'
import flowIcon from '../assets/flow.svg'
import realtimeIcon from '../assets/realtime.svg'
import reportIcon from '../assets/report.svg'
import wallboardIcon from '../assets/wallboard.svg'

import account from '../assets/account.svg'
import config from '../assets/configIcon.svg'
import enterprise from '../assets/enterprise.svg'
import report from '../assets/reportsIcon.svg'
import integration from '../assets/integration.svg'
import disponibility from '../assets/disponibility.svg'

export const getAppName = (app: string) => {
  switch (app) {
    case "admin":
      return "Plataforma Admin"
      
    case "flow":
      return "Flow"
      
    case "realtime":
      return "Realtime"
      
    case "report":
      return "Report"
      
    case "wallboard":
      return "Wallboard"
  
    default:
      break;
  }
}

export const getAppIcon = (app: string) => {
  switch (app) {
    case "admin":
      return adminIcon
      
    case "flow":
      return flowIcon
      
    case "realtime":
      return realtimeIcon
      
    case "report":
      return reportIcon
      
    case "wallboard":
      return wallboardIcon
  
    default:
      break;
  }
}

export const getMenuIcon = (menu: string) => {
  switch (menu) {
    case "account":
      return account

    case "config":
      return config

    case "enterprise":
      return enterprise

    case "report":
      return report

    case "integration":
      return integration

    case "disponibility":
      return disponibility

    case "flow":
      return flowIcon

    case "admin":
      return adminIcon

    case "wallboard":
      return wallboardIcon

    case "realtime":
      return realtimeIcon

    case "layers":
      return reportIcon
  
    default:
      return report
  }
}

export const formatCPF = (value: string, isCNPJ?: boolean) => {

  if (value.length <= 3) {
    value = value.replace(/[^0-9]/, "");
    value = value.replace(/^([0-9]{3})/, "$1.");
    // value = value.replace(/^([0-9]{3})\.([0-9]{3})\.([0-9]{3})/, "$1.$2");
    return value
  }

  if (value.length > 3 && value.length <= 7) {
    value = value.replace(/^([0-9]{3})\.([0-9]{3})/, "$1.$2.");
    // value = value.replace(/^([0-9]{3})\.([0-9]{3})\.([0-9]{3})/, "$1.$2");
    return value
  }

  if (value.length > 7 && value.length <= 11) {
    value = value.replace(/^([0-9]{3})\.([0-9]{3})\.([0-9]{3})/, "$1.$2.$3-");
    // value = value.replace(/^([0-9]{3})\.([0-9]{3})\.([0-9]{3})/, "$1.$2");
    return value
  }

  if (value.length > 14 && value.length <= 15) {
    value = value.replace(/[^0-9]/, "");
    value = value.replace(/[^0-9]/, "");
    value = value.replace(/[^0-9]/, "");
    console.log(value)
    value = value.replace(/^([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{4})/, "$1.$2.$3/$4-");
    // value = value.replace(/^([0-9]{3})\.([0-9]{3})\.([0-9]{3})/, "$1.$2");
    return value
  }

  if (isCNPJ) {
    value = value.replace(/[^0-9]/, "");
    value = value.replace(/[^0-9]/, "");
    value = value.replace(/[^0-9]/, "");
    console.log(value)
    value = value.replace(/^([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{4})/, "$1.$2.$3/$4-");
    // value = value.replace(/^([0-9]{3})\.([0-9]{3})\.([0-9]{3})/, "$1.$2");
    return value
  }

  return value  
}

export const formatPhone = (value: string) => {

  if (value.length <= 2) {
    value = value.replace(/[^0-9]/, "");
    value = value.replace(/^([0-9]{2})/, "($1)");
    // value = value.replace(/^([0-9]{3})\.([0-9]{3})\.([0-9]{3})/, "$1.$2");
    return value
  }

  return value  
}

export const formatBirth = (value: string) => {

  if (value.length <= 2) {
    value = value.replace(/[^0-9]/, "");
    value = value.replace(/^([0-9]{2})/, "$1/");
    // value = value.replace(/^([0-9]{3})\.([0-9]{3})\.([0-9]{3})/, "$1.$2");
    return value
  }

  if (value.length === 5) {
    value = value.replace(/^([0-9]{2})\/([0-9]{2})/, "$1/$2/");
    // value = value.replace(/^([0-9]{3})\.([0-9]{3})\.([0-9]{3})/, "$1.$2");
    return value
  }

  return value  
}