import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';
import { useBranchStore } from '@/stores/branchStore';
import { useLanguageStore } from '@/stores/languageStore';
import { branches } from '@/data/branches';
import { translations } from '@/data/translations';

interface BranchSelectionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BranchSelectionPopup({
  isOpen,
  onClose,
}: BranchSelectionPopupProps) {
  const { selectedBranch, setSelectedBranch } = useBranchStore();
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-obsidian/90 backdrop-blur-md"
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-xl bg-charcoal rounded-[40px] overflow-hidden shadow-2xl border border-white/5"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-white/5">
              <h2 className="text-cream text-2xl font-black">{t.branches.title}</h2>
              <button
                onClick={onClose}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-cream hover:bg-white/5 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Branch List */}
            <div className="p-8 space-y-4 max-h-[60vh] overflow-y-auto scrollbar-hide">
              {branches.map((branch) => (
                <button
                  key={branch.id}
                  onClick={() => {
                    setSelectedBranch(branch as any);
                    onClose();
                  }}
                  className={`w-full p-6 rounded-3xl transition-all flex items-center justify-between border ${
                    selectedBranch?.id === branch.id
                      ? 'bg-amber-fire border-amber-fire text-obsidian'
                      : 'bg-white/5 border-white/5 text-cream hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      selectedBranch?.id === branch.id ? 'bg-obsidian/10' : 'bg-white/5'
                    }`}>
                      <MapPin size={24} />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-lg font-black">{lang === 'ar' ? branch.name : branch.nameEn}</span>
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${
                        selectedBranch?.id === branch.id ? 'text-obsidian/60' : 'text-stone'
                      }`}>
                        {lang === 'ar' ? branch.address : branch.addressEn}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                      branch.status === 'open' 
                        ? 'bg-success-green/20 text-success-green' 
                        : 'bg-error-red/20 text-error-red'
                    }`}>
                      {branch.status === 'open' ? t.branches.open : t.branches.closed}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
