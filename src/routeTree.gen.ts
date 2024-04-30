/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DashboardIndexImport } from './routes/dashboard/index'
import { Route as AuthVerifyMagicLinkIndexImport } from './routes/auth/verify-magic-link/index'
import { Route as AuthSigninIndexImport } from './routes/auth/signin/index'

// Create/Update Routes

const DashboardIndexRoute = DashboardIndexImport.update({
  path: '/dashboard/',
  getParentRoute: () => rootRoute,
} as any)

const AuthVerifyMagicLinkIndexRoute = AuthVerifyMagicLinkIndexImport.update({
  path: '/auth/verify-magic-link/',
  getParentRoute: () => rootRoute,
} as any)

const AuthSigninIndexRoute = AuthSigninIndexImport.update({
  path: '/auth/signin/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/dashboard/': {
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof rootRoute
    }
    '/auth/signin/': {
      preLoaderRoute: typeof AuthSigninIndexImport
      parentRoute: typeof rootRoute
    }
    '/auth/verify-magic-link/': {
      preLoaderRoute: typeof AuthVerifyMagicLinkIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  DashboardIndexRoute,
  AuthSigninIndexRoute,
  AuthVerifyMagicLinkIndexRoute,
])

/* prettier-ignore-end */
