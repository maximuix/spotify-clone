import {Song} from "@/types";
import usePlayer from "@/hooks/usePlayer";
import useAuthModal from "@/hooks/useAuthModal";
import {useUser} from "@/hooks/useUser";
import subscribeModal from "@/components/SubscribeModal";
import useSubscribeModal from "@/hooks/useSubscribeModal";

const useOnPlay = (songs: Song[]) => {

    const player = usePlayer();
    const subscribeModal = useSubscribeModal()
    const authModal = useAuthModal();
    const {user, subscription} = useUser()

    const onPlay = (id: string) => {
        if (!user) {
            return authModal.onOpen();
        }

        if (!subscription) {
            return subscribeModal.onOpen()
        }

        player.setId(id)
        player.setIds(songs.map((song) => song.id))
    }

    return onPlay;
}

export default useOnPlay;