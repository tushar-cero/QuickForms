import { create } from 'zustand';

export const useStore = create(() => ({
  user: null,
  forms: [],
  formDetails: {},
  activeFormId: null

  // setUser: (user) => set({ user }),

  // setForms: (forms) => set({ forms }),

  // setFormDetail: (detail) => {
  //   set((state) => ({
  //     formDetails: {
  //       ...state.formDetails,
  //       [detail.id]: detail,
  //     },
  //   }));
  // },

  // setActiveFormId: (id) => set({ activeFormId: id }),

  // clearActiveForm: () => set({ activeFormId: null }),
}));
