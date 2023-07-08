import React from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";

interface LazyImageProps {
    url: string;
    borderRadius?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({url, borderRadius}) => {

    return (
        <div className="w-full">
            <LazyLoadImage
                className="h-full w-full"
                src={url}
                style={{
                    objectFit: "cover",
                    borderRadius: borderRadius ? borderRadius : "none"
                }}
                alt="Image"
                effect="blur"
            />
        </div>
    );
};

export default LazyImage;