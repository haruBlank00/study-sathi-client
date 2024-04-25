/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthSigninIndexImport } from './routes/auth/signin/index'
import { Route as AuthMagicLinkIndexImport } from './routes/auth/magic-link/index'

// Create/Update Routes

const AuthSigninIndexRoute = AuthSigninIndexImport.update({
  path: '/auth/signin/',
  getParentRoute: () => rootRoute,
} as any)

const AuthMagicLinkIndexRoute = AuthMagicLinkIndexImport.update({
  path: '/auth/magic-link/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/auth/magic-link/': {
      preLoaderRoute: typeof AuthMagicLinkIndexImport
      parentRoute: typeof rootRoute
    }
    '/auth/signin/': {
      preLoaderRoute: typeof AuthSigninIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  AuthMagicLinkIndexRoute,
  AuthSigninIndexRoute,
])

/* prettier-ignore-end */
