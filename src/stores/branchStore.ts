import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Branch } from '@/types';


interface BranchState {
  selectedBranch: Branch | null;
  setSelectedBranch: (branch: Branch | null) => void;
}

export const useBranchStore = create<BranchState>()(
  persist(
    (set) => ({
      selectedBranch: null,
      setSelectedBranch: (branch) => set({ selectedBranch: branch }),
    }),
    {
      name: 'wicht-branch-v2', // Changed name to avoid conflict
    }
  )
);
