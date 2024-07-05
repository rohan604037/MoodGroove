import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({ name, image, desc, id }) => {
    const { playWidthId, track, playStatus } = useContext(PlayerContext);

    const handleClick = () => {
        if (track.id !== id || !playStatus) {
            playWidthId(id); 
        }
    };

    return (
        <div onClick={handleClick} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
            <img className="rounded" src={image} alt={name} />
            <p className="font-bold mt-2 mb-1">{name}</p>
            <p className="text-slate-200 text-sm">{desc}</p>
        </div>
    );
};

export default SongItem;
