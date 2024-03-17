import KritikaProfile from "../assets/images/kritikabandekar.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="name-section">
        <p>SOFTWARE DEVELOPER</p>
        <div className="inner-typing-wrapper">KRITIKA BANDEKAR</div>
      </div>
      <div className="profile-pic">
        <img src={KritikaProfile} alt="kritikab" />
      </div>
      {/* <div className="brief-details">
        <div className="inner-div">
          I'm a Software Developer based in Goa.🌴 I love building web apps. My
          journey in software development is marked by a constant pursuit of
          knowledge and a passion for innovation. From crafting clean and
          efficient code to designing user-friendly interfaces, I thrive on the
          challenges that come with bringing ideas to life. Join me on my
          journey as I continue to push boundaries, learn, and grow in this
          exciting field. Oh, and I also love Painting and Sketching.
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
