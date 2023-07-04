import "../css/ImageShow.css"

function ImageShow({url, title}) {
  console.log(url, title)
  return (
    <li className="gif_content">
      <img className="gif_content" src={url} alt={title} />
    </li>
  );
}

export default ImageShow;
