import React from 'react';

interface SiteOverlayProps {
    fc: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const SiteOverlay: React.FC<SiteOverlayProps> = ({fc}) => {
    return (
        <div onClick={fc}>
            <div className="first-letter: z-100 fixed top-0 left-0 bottom-0  right-0 inline-block    bg-dark/50  font-os  backdrop-blur-[2px]"></div>
        </div>
    );
};

export default SiteOverlay;