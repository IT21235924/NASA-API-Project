import React from "react";

const Gallery = (props: { data: string[] }) => {

  console.log(props.data);
  const limitedData = props.data.slice(0, 100); // Take only the first 50 images
  
  return (
    <div className="p-5 md:p-10">
      <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
        {limitedData.map((url, index) => (
          <img key={index} src={url} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
