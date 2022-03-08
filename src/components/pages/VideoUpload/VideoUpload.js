import Header from "../../sub-components/Header/Header";
import uploadimage from "../../../assets/Images/Upload-video-preview.jpg";
import "./VideoUpload.scss";

function UploadPage() {
  return (
    <div className="upload-page">
      <Header></Header>
      <form className="upload__form">
        <div className="upload">
          <h1 className="upload__title">Upload Video</h1>
          <div className="upload__section">
            <section className="upload__video-thumbnail">
              <h3>VIDEO THUMBNAIL</h3>
              <img
                className="upload__thumbnail"
                src={uploadimage}
                alt="Picture of Bike"
              />
            </section>
            <section className="upload__text-area">
              <label className="upload__label">
                TITLE OF YOUR VIDEO
                <div className="upload__area">
                  <input
                    className="upload__bar"
                    type="text"
                    placeholder="Add a title to your video"
                  />
                </div>
              </label>
              <label className="upload__label">
                ADD A VIDEO DESCRIPTION
                <div className="">
                  <input
                    className="upload__search-bar"
                    type="text"
                    placeholder="Add a description to your video"
                  />
                </div>
                <div className="">
                  <button className="upload__button-1">CANCEL</button>
                  <button className="upload__button-2">PUBLISH</button>
                </div>
              </label>
            </section>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UploadPage;
