import "./Me.css";




function Whastapp() {
  alert('I will answer as soon as possible!');
}

const Me = () => {
  return (
    <div className="me">
      <div className="wrapper">
        <div
          className="textContainer"
        >
          <h2>Amankossova Aisulu</h2>
          <h1>
            Web developer
            
          </h1>
          <hr />
          <h3>
            This is my blog. I post here my work. Scroll down to see my latest work and you can contact me
            <br />
          </h3>
          
          
          <a href="https://wa.me/7718346834" class="btn btn-primary btn-xs" onClick={Whastapp} role="button" aria-pressed="true">Contact me</a>
  
          
        </div>
      </div>
      
      <div className="imageContainer">
        <img src="/me.png" alt="" />
      </div>
    </div>
  );
};

export default Me;