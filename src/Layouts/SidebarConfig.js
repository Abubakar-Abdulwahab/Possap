import { PATH_DASHBOARD } from '../routes/paths';




const getIcon = (name) => (
  <span className="pcoded-micon"><i className={"feather " + name}></i></span>
);

const ICONS = {
  home: getIcon('icon-home'),
  services: getIcon('icon-package'),
  finance: getIcon('icon-file-plus'),
  users: getIcon('icon-users')
};
console.log(PATH_DASHBOARD.services.extract, 'PATH')
const sidebarConfig = [
  {
    subheader: 'Possap',
    items: [
      {
        title: 'Dashboard',
        path: PATH_DASHBOARD.main.root,
        icon: ICONS.home
      },
      {
        title: 'Services',
        path: PATH_DASHBOARD.services.extract,
        icon: ICONS.services,
        children: [
          { title: 'police extract', path: PATH_DASHBOARD.services.extract },
          { title: 'character clearance', path: PATH_DASHBOARD.services.cCertificate },
          { title: 'Guard Services', path: PATH_DASHBOARD.services.escortGuard }
        ]
      },
      {
        title: 'Finance',
        path: PATH_DASHBOARD.finance.root,
        icon: ICONS.finance
      },
      {
        title: 'Users',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.users,
        children: [
          { title: 'profile', path: PATH_DASHBOARD.user.profile },
          { title: 'create', path: PATH_DASHBOARD.user.newUser },
          // { title: 'edit', path: PATH_DASHBOARD.user.editById },
        ]
      }
    ]
  }
];

export default sidebarConfig;
