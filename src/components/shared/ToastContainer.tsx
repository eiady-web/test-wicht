import { useToastStore } from '@/stores/toastStore';
import { AnimatePresence, motion } from 'framer-motion';

export default function ToastContainer() {
  const { toasts } = useToastStore();

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[200] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ y: -20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-matte-black border-r-[3px] border-r-amber-fire rounded-xl px-4 py-3 shadow-dropdown flex items-center gap-3 pointer-events-auto"
          >
            {toast.productImage && (
              <img
                src={toast.productImage}
                alt=""
                className="w-8 h-8 rounded-small object-cover"
              />
            )}
            <div className="flex-1 min-w-0">
              {toast.productName && (
                <p className="text-cream text-sm font-semibold truncate">
                  {toast.productName}
                </p>
              )}
              <p className="text-stone text-xs">{toast.message}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
