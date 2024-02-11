import { 
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'dashboard',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'Дашборд',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: []
}]

const catalogNavTree = [{
  key: 'catalogMenu',
  submenu: [
    {
      key: 'catalog',
      title: 'Каталог',
      icon: ShoppingCartOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'goods',
          path: `${APP_PREFIX_PATH}/home`,
          title: 'Товары',
          breadcrumb: false,
          submenu: [],
        },
        {
          key: 'category',
          path: `${APP_PREFIX_PATH}/home`,
          title: 'Категории',
          breadcrumb: false,
          submenu: [],
        },
        {
          key: 'collections',
          path: `${APP_PREFIX_PATH}/home`,
          title: 'Коллекции',
          breadcrumb: false,
          submenu: [],
        },
        {
          key: 'combo',
          path: `${APP_PREFIX_PATH}/home`,
          title: 'Комбо',
          breadcrumb: false,
          submenu: [],
        },
      ]
    }
  ]
}]

const ordersNavTree = [{
  key: 'orders',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'Заказы',
  icon: ShoppingOutlined,
  breadcrumb: false,
  submenu: []
}]

const clientsNavTree = [{
  key: 'clientsMenu',
  submenu: [
    {
      key: 'clients',
      title: 'Клиенты',
      icon: UserOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'сlientsList',
          path: `${APP_PREFIX_PATH}/user-list`,
          title: 'Список клиентов',
          breadcrumb: false,
          submenu: [],
        },
        {
          key: 'clientsGroups',
          path: `${APP_PREFIX_PATH}/home`,
          title: 'Группы клиентов',
          breadcrumb: false,
          submenu: [],
        },
      ]
    }
  ]
}]

const bannersNavTree = [{
  key: 'banners',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'Баннеры',
  icon: PictureOutlined,
  breadcrumb: false,
  submenu: []
}]

const promoNavTree = [{
  key: 'promo',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'Промокоды',
  icon: GiftOutlined,
  breadcrumb: false,
  submenu: []
}]

const offlinePointsNavTree = [{
  key: 'offlinePointsList',
  submenu: [
    {
      key: 'offlinePoints',
      title: 'Оффлайн точки',
      icon: ShopOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'adresses',
          path: `${APP_PREFIX_PATH}/home`,
          title: 'Адреса клиентов',
          breadcrumb: false,
          submenu: [],
        },
        {
          key: 'geoZones',
          path: `${APP_PREFIX_PATH}/home`,
          title: 'Гео зоны',
          breadcrumb: false,
          submenu: [],
        },
      ]
    }
  ]
}]

const employeesNavTree = [{
  key: 'employees',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'Сотрудники',
  icon: UsergroupAddOutlined,
  breadcrumb: false,
  submenu: []
}]

const mailsNavTree = [{
  key: 'mails',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'Рассылки',
  icon: MailOutlined,
  breadcrumb: false,
  submenu: []
}]

const systemsNavTree = [{
  key: 'systemList',
  title: 'Системные',
  submenu: [
    {
      key: 'settings',
      path: `${APP_PREFIX_PATH}/home`,
      title: 'Настройки',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: [],
    },
    {
      key: 'mobileApp',
      path: `${APP_PREFIX_PATH}/home`,
      title: 'Мобильное приложение',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: [],
    },
    {
      key: 'logs',
      path: `${APP_PREFIX_PATH}/home`,
      title: 'Логи',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: [],
    },
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree,
  ...catalogNavTree,
  ...ordersNavTree,
  ...clientsNavTree,
  ...bannersNavTree,
  ...promoNavTree,
  ...offlinePointsNavTree,
  ...employeesNavTree,
  ...mailsNavTree,
  ...systemsNavTree
]

export default navigationConfig;
