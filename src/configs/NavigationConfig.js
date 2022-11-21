import {
  DashboardOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'


const dashBoardNavTree = [{
  key: "d",
  // path: `${APP_PREFIX_PATH}/dashboard`,
  path: "",
  title: " ",
  icon: "",
  breadcrumb: false,
  submenu: [
    {
      key: "dashboard",
      // path: `${APP_PREFIX_PATH}/dashboard`,
      path: `${APP_PREFIX_PATH}/dashboard`,
      title: "dashboard",
      icon: DashboardOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'membership',
        path: `${APP_PREFIX_PATH}/membership/members`,
        title: 'membership',
        icon: DashboardOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'members',
            path: `${APP_PREFIX_PATH}/membership/members`,
            title: 'members',
            // icon: DashboardOutlined,
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'membership_request',
            path: `${APP_PREFIX_PATH}/membership/membership_request`,
            title: 'membership_request',
            // icon: DashboardOutlined,
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'payments',
            path: `${APP_PREFIX_PATH}/membership/payments`,
            title: 'payments',
            // icon: DashboardOutlined,
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'membership_plans',
            path: `${APP_PREFIX_PATH}/membership/membership_plans`,
            title: 'membership_plans',
            // icon: DashboardOutlined,
            breadcrumb: true,
            submenu: []
          },
        ]
    },
    {
      key: 'event_management',
        path: `${APP_PREFIX_PATH}/events/event_booking`,
        title: 'event_management',
        icon: DashboardOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'event_booking',
            path: `${APP_PREFIX_PATH}/events/event_booking`,
            title: 'event_booking',
            // icon: DashboardOutlined,
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'event_list',
            path: `${APP_PREFIX_PATH}/events/event_list`,
            title: 'event_list',
            // icon: DashboardOutlined,
            breadcrumb: true,
            submenu: []
          },
        ]
    },
    {
      key: 'facility_management',
        path: `${APP_PREFIX_PATH}/facilities/facility_booking`,
        title: 'facility_management',
        icon: DashboardOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'facility_booking',
            path: `${APP_PREFIX_PATH}/facilities/facility_booking`,
            title: 'facility_booking',
            // icon: DashboardOutlined,
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'facility_list',
            path: `${APP_PREFIX_PATH}/facilities/facility_list`,
            title: 'facility_list',
            // icon: DashboardOutlined,
            breadcrumb: true,
            submenu: []
          },
        ]
    },
    

  ]
}]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
