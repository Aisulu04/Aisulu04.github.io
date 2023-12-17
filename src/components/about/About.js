import "./About.css";


const About = () => {

  return (
    <div
      className="about"
    >

      <div className="titleContainer">
        <div className="title">
          
          <h1>
            <b>Companies I worked with</b>
          </h1>
          
        </div>
        <div>
        <h2>I've worked with many companies. You can see how long I've worked with and you can even contact them. And I'm gonna leave my works as well</h2>
        </div>
      </div>
      
      <div className="listContainer">
      <table>
  <thead>
    <tr>
      <th>Company name</th>
      <th>Month I worked</th>
      <th>Email</th>
      <th>Phome number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>GeeksCom</td>
      <td>12 month</td>
      <td>geeks@mail.ru</td>
      <td>8777777777</td>
    </tr>
    <tr>
      
      <td>5 month</td>
      <td>gc@mail.ru</td>
      <td>87777777777</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>IT_com</td>
      <td>15 month</td>
      <td>it_com@gmail.com</td>
      <td>85555555555</td>
    </tr>
  </tfoot>
</table>
<div class="container">
  <div class="row row-cols-2">
    <div class="col">
      <img src = "/photo_5359624414221683850_w.jpg"/>
    </div>
    <div class="col">
    <img src = "/photo_5359624414221683854_w.jpg"/>
    </div>
    <div class="col">
    <h2>This one of my works. I created a small website using HTML, CSS, JavaScript</h2>
    </div>
    <div class="col">
      <h2>This is my practice project about flexbox. In this project I used HTML, CSS</h2>
    </div>
  </div>
</div>
      </div>

    
    </div>
  );
};

export default About;

