"use client"

import { create } from 'zustand'

export const useAuthStore = create(
    (set, get) => ({
        // Estado INICIAL
        isLogged: false,
        tipo: '',
        // Actions
        setTipoStore: (tipo) =>
            set({ tipo }),
        // Actions
        loginStore: () =>
            set({ isLogged: true }),
        signoutStore: () =>
            set({ isLogged: false }),
    })
)