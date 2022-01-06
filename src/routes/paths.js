// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  verify: path(ROOTS_AUTH, '/verify')
};

export const ERROR_PAGE = {
  page404: '/404',
  page500: '/500',
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  main: {
    root: path(ROOTS_DASHBOARD, '/main'),
  },
  services: {
    extract: path(ROOTS_DASHBOARD, '/service/police-extract'),
    cCertificate: path(ROOTS_DASHBOARD, '/service/character-clearance-certificate'),
    escortGuard: path(ROOTS_DASHBOARD, '/service/escort-guard-certificate')
  },
  finance: {
    root: path(ROOTS_DASHBOARD, '/finance'),
  },
  user: {
    root: path(ROOTS_DASHBOARD, '/user'),
    profile: path(ROOTS_DASHBOARD, '/user/profile'),
    editById: path(ROOTS_DASHBOARD, '/user/editById')
  }
};
