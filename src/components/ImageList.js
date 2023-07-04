import ImageShow from "./ImageShow";
import "../css/ImageList.css";

function ImageList({ images }) {
  console.log(images.length);

  return (
    <ul className="image_main-container">
      {images.length === 0 ? (
        <div> No images found, try looking for something! </div>
      ) : (
        images.map((image) => {
          return (
            <ImageShow
              key={image.id}
              url={image.images.downsized_medium.url}
              title={image.title}
            />
          );
        })
      )}
    </ul>
  );
}

export default ImageList;
