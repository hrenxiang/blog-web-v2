import React from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";

interface LazyImageProps {
    url: string;
}

const LazyImage: React.FC<LazyImageProps> = ({url}) => {

    return (
        <div className="h-full w-full">
            <LazyLoadImage
                className="h-full w-full"
                src={url}
                style={{
                    objectFit: "cover",
                }}
                alt="Image"
                effect="blur"
            />
        </div>
    );
};

export default LazyImage;