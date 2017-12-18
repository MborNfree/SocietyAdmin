import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
  // {
  //   title: 'UI Features',
  //   icon: 'nb-keypad',
  //   link: '/pages/ui-features',
  //   children: [
  //     {
  //       title: 'Buttons',
  //       link: '/pages/ui-features/buttons',
  //     },
  //     {
  //       title: 'Grid',
  //       link: '/pages/ui-features/grid',
  //     },
  //     {
  //       title: 'Icons',
  //       link: '/pages/ui-features/icons',
  //     },
  //     {
  //       title: 'Modals',
  //       link: '/pages/ui-features/modals',
  //     },
  //     {
  //       title: 'Typography',
  //       link: '/pages/ui-features/typography',
  //     },
  //     {
  //       title: 'Animated Searches',
  //       link: '/pages/ui-features/search-fields',
  //     },
  //     {
  //       title: 'Tabs',
  //       link: '/pages/ui-features/tabs',
  //     },
  //   ],
  // },
  // {
  //   title: 'Forms',
  //   icon: 'nb-compose',
  //   children: [
  //     {
  //       title: 'Form Inputs',
  //       link: '/pages/forms/inputs',
  //     },
  //     {
  //       title: 'Form Layouts',
  //       link: '/pages/forms/layouts',
  //     },
  //   ],
  // },
  // {
  //   title: 'Components',
  //   icon: 'nb-gear',
  //   children: [
  //     {
  //       title: 'Tree',
  //       link: '/pages/components/tree',
  //     }, {
  //       title: 'Notifications',
  //       link: '/pages/components/notifications',
  //     },
  //   ],
  // },
  // {
  //   title: 'Maps',
  //   icon: 'nb-location',
  //   children: [
  //     {
  //       title: 'Google Maps',
  //       link: '/pages/maps/gmaps',
  //     },
  //     {
  //       title: 'Leaflet Maps',
  //       link: '/pages/maps/leaflet',
  //     },
  //     {
  //       title: 'Bubble Maps',
  //       link: '/pages/maps/bubble',
  //     },
  //   ],
  // },
  // {
  //   title: 'Charts',
  //   icon: 'nb-bar-chart',
  //   children: [
  //     {
  //       title: 'Echarts',
  //       link: '/pages/charts/echarts',
  //     },
  //     {
  //       title: 'Charts.js',
  //       link: '/pages/charts/chartjs',
  //     },
  //     {
  //       title: 'D3',
  //       link: '/pages/charts/d3',
  //     },
  //   ],
  // },
  // {
  //   title: ' Reports Charts',
  //   icon: 'nb-bar-chart',
  //   children: [
  //     {
  //       title: 'Echarts',
  //       link: '/pages/charts/echarts',
  //     },
  //     {
  //       title: 'Charts.js',
  //       link: '/pages/charts/chartjs',
  //     },
  //     {
  //       title: 'D3',
  //       link: '/pages/charts/d3',
  //     },
  //   ],
  // },
  // {
  //   title: 'Editors',
  //   icon: 'nb-title',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/pages/editors/tinymce',
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: '/pages/editors/ckeditor',
  //     },
  //   ],
  // },
  // {
  //   title: 'Tables',
  //   icon: 'nb-tables',
  //   children: [
  //     {
  //       title: 'Smart Table',
  //       link: '/pages/tables/smart-table',
  //     },
  //   ],
  // },
  {
    title: 'Members',
    icon: 'nb-person',
    children: [
      {
        title: 'Committee Member',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Residents Members',
        link: '/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'Society Property',
    icon: 'fa fa-building',
    children: [
      {
        title: 'Society Property',
        link: '/pages/components/tree',
      }, {
        title: 'Society Assets',
        link: '/pages/components/notifications',
      },
    ],
  },
  {
    title: 'Accounting',
    icon: 'nb-gear',
    children: [
      {
        title: 'Generate Bill',
        link: '/pages/components/tree',
      }, {
        title: 'Add charges',
        link: '/pages/components/notifications',
      },
      {
        title: 'Generate Balance sheet',
        link: '/pages/components/notifications',
      },
      {
        title: 'Add Bill Due dates',
        link: '/pages/components/notifications',
      },
    ],
  },
  {
    title: 'Services',
    icon: 'nb-location',
    children: [
      {
        title: 'Doctor Service',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Plumber Service',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Electrician Service',
        link: '/pages/maps/bubble',
      },
    ],
  },
  {
    title: ' Reports Charts',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Documents',
    icon: 'nb-title',
    children: [
      {
        title: 'Add Circular',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'Circulars',
        link: '/pages/editors/ckeditor',
      },
      {
        title: 'User Documents',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Emergency Contacts',
    icon: 'nb-tables',
    children: [
      {
        title: 'Add Emergency Contact',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Emergency Contacts',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'Rule & Regulations',
    icon: 'nb-tables',
    children: [
      {
        title: 'Add Rules',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Society Rule',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
