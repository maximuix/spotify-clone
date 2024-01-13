import { create } from "zustand";

interface UploadAuthStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

}

const useAuthModal = create<UploadAuthStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default useAuthModal;