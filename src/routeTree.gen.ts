/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as ByebyeIndexImport } from './routes/byebye/index'
import { Route as DashboardLayoutImport } from './routes/dashboard/_layout'
import { Route as AuthLayoutImport } from './routes/auth/_layout'
import { Route as DashboardLayoutIndexImport } from './routes/dashboard/_layout/index'
import { Route as DashboardLayoutChallengesIndexImport } from './routes/dashboard/_layout/challenges/index'
import { Route as AuthLayoutMagiclinkIndexImport } from './routes/auth/_layout/magiclink/index'
import { Route as DashboardLayoutChallengesChallengeIdIndexImport } from './routes/dashboard/_layout/challenges/$challengeId/index'
import { Route as DashboardLayoutChallengesChallengeIdLogsIndexImport } from './routes/dashboard/_layout/challenges/$challengeId/logs/index'
import { Route as DashboardLayoutChallengesChallengeIdLogsLogIdIndexImport } from './routes/dashboard/_layout/challenges/$challengeId/logs/$logId/index'
import { Route as DashboardLayoutChallengesChallengeIdLogsLogIdNewImport } from './routes/dashboard/_layout/challenges/$challengeId/logs/$logId/new'

// Create Virtual Routes

const DashboardImport = createFileRoute('/dashboard')()
const AuthImport = createFileRoute('/auth')()
const AuthLayoutSigninRouteLazyImport = createFileRoute(
  '/auth/_layout/signin',
)()

// Create/Update Routes

const DashboardRoute = DashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  path: '/auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ByebyeIndexRoute = ByebyeIndexImport.update({
  path: '/byebye/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardLayoutRoute = DashboardLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => DashboardRoute,
} as any)

const AuthLayoutRoute = AuthLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => AuthRoute,
} as any)

const DashboardLayoutIndexRoute = DashboardLayoutIndexImport.update({
  path: '/',
  getParentRoute: () => DashboardLayoutRoute,
} as any)

const AuthLayoutSigninRouteLazyRoute = AuthLayoutSigninRouteLazyImport.update({
  path: '/signin',
  getParentRoute: () => AuthLayoutRoute,
} as any).lazy(() =>
  import('./routes/auth/_layout/signin/route.lazy').then((d) => d.Route),
)

const DashboardLayoutChallengesIndexRoute =
  DashboardLayoutChallengesIndexImport.update({
    path: '/challenges/',
    getParentRoute: () => DashboardLayoutRoute,
  } as any)

const AuthLayoutMagiclinkIndexRoute = AuthLayoutMagiclinkIndexImport.update({
  path: '/magiclink/',
  getParentRoute: () => AuthLayoutRoute,
} as any)

const DashboardLayoutChallengesChallengeIdIndexRoute =
  DashboardLayoutChallengesChallengeIdIndexImport.update({
    path: '/challenges/$challengeId/',
    getParentRoute: () => DashboardLayoutRoute,
  } as any)

const DashboardLayoutChallengesChallengeIdLogsIndexRoute =
  DashboardLayoutChallengesChallengeIdLogsIndexImport.update({
    path: '/challenges/$challengeId/logs/',
    getParentRoute: () => DashboardLayoutRoute,
  } as any)

const DashboardLayoutChallengesChallengeIdLogsLogIdIndexRoute =
  DashboardLayoutChallengesChallengeIdLogsLogIdIndexImport.update({
    path: '/challenges/$challengeId/logs/$logId/',
    getParentRoute: () => DashboardLayoutRoute,
  } as any)

const DashboardLayoutChallengesChallengeIdLogsLogIdNewRoute =
  DashboardLayoutChallengesChallengeIdLogsLogIdNewImport.update({
    path: '/challenges/$challengeId/logs/$logId/new',
    getParentRoute: () => DashboardLayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/auth': {
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/auth/_layout': {
      preLoaderRoute: typeof AuthLayoutImport
      parentRoute: typeof AuthRoute
    }
    '/dashboard': {
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/_layout': {
      preLoaderRoute: typeof DashboardLayoutImport
      parentRoute: typeof DashboardRoute
    }
    '/byebye/': {
      preLoaderRoute: typeof ByebyeIndexImport
      parentRoute: typeof rootRoute
    }
    '/auth/_layout/signin': {
      preLoaderRoute: typeof AuthLayoutSigninRouteLazyImport
      parentRoute: typeof AuthLayoutImport
    }
    '/dashboard/_layout/': {
      preLoaderRoute: typeof DashboardLayoutIndexImport
      parentRoute: typeof DashboardLayoutImport
    }
    '/auth/_layout/magiclink/': {
      preLoaderRoute: typeof AuthLayoutMagiclinkIndexImport
      parentRoute: typeof AuthLayoutImport
    }
    '/dashboard/_layout/challenges/': {
      preLoaderRoute: typeof DashboardLayoutChallengesIndexImport
      parentRoute: typeof DashboardLayoutImport
    }
    '/dashboard/_layout/challenges/$challengeId/': {
      preLoaderRoute: typeof DashboardLayoutChallengesChallengeIdIndexImport
      parentRoute: typeof DashboardLayoutImport
    }
    '/dashboard/_layout/challenges/$challengeId/logs/': {
      preLoaderRoute: typeof DashboardLayoutChallengesChallengeIdLogsIndexImport
      parentRoute: typeof DashboardLayoutImport
    }
    '/dashboard/_layout/challenges/$challengeId/logs/$logId/new': {
      preLoaderRoute: typeof DashboardLayoutChallengesChallengeIdLogsLogIdNewImport
      parentRoute: typeof DashboardLayoutImport
    }
    '/dashboard/_layout/challenges/$challengeId/logs/$logId/': {
      preLoaderRoute: typeof DashboardLayoutChallengesChallengeIdLogsLogIdIndexImport
      parentRoute: typeof DashboardLayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AuthRoute.addChildren([
    AuthLayoutRoute.addChildren([
      AuthLayoutSigninRouteLazyRoute,
      AuthLayoutMagiclinkIndexRoute,
    ]),
  ]),
  DashboardRoute.addChildren([
    DashboardLayoutRoute.addChildren([
      DashboardLayoutIndexRoute,
      DashboardLayoutChallengesIndexRoute,
      DashboardLayoutChallengesChallengeIdIndexRoute,
      DashboardLayoutChallengesChallengeIdLogsIndexRoute,
      DashboardLayoutChallengesChallengeIdLogsLogIdNewRoute,
      DashboardLayoutChallengesChallengeIdLogsLogIdIndexRoute,
    ]),
  ]),
  ByebyeIndexRoute,
])

/* prettier-ignore-end */
