import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import TextForm from './Components/TextForm';
import logo from './Media/logo_1.svg';
import Linkdin from './Media/link.png';
import Git from './Media/Git.png';
import Ibs from './Media/IBS.png';
import Isro from './Media/ISRO.png';
import First from './Media/Slides/First.jpg';
import second from './Media/Slides/Second.jpg';
import third from './Media/Slides/third.png';
import fourth from './Media/Slides/fourth.jpg';
import fifth from './Media/Slides/fifth.jpg';
import sixth from './Media/Slides/sixth.png';
import Image from './Components/Image';
import "./Components/Slider.css";
import dipex from './Media/dipex.png';





import './App.css';
let name ="prashik";
function App() {
  return (
   

    <>
      <div className="app-bg">    
        <Navbar title= "Portfolio"></Navbar>
        <section className="section section-1">
    <div className='container my-3'><TextForm heading="Analyze Your Text Here"></TextForm></div>
    <div className="container my-4">
    <div className="row justify-content-center">
    
    <div className="col-md-4">
      <Cards CardName={Linkdin}  CardLoc="Lnkdin" imgWidth="250px" imgHeight="130px" Title="Linkedin" data="This is my Linkedin! Account" link= "https://www.linkedin.com/in/prashik-gadge-737bb3221"  btnhead="Go to Linkedin"></Cards>
    </div>
    <div className="col-md-4">
      <Cards CardName={Git}  CardLoc="Git" imgWidth="250px" imgHeight="130px" Title="Git Hub" data="This is my Git Hub repositories" link= "https://GitHub.com/PrashikGadge-27/"  btnhead="Go to Git Repo" ></Cards>
    </div>
    <div className="col-md-4">
       <Cards CardName={Ibs}  CardLoc="IBS" imgWidth="250px" imgHeight="130px" Title="Working Company" data="This is my Current Company" link= "https://www.ibsfintech.com/"  btnhead="Go to Company site" ></Cards>
    </div>
    </div>
    <br /><br /><br />
    <div className="single-card-row">
          <Cards CardName={Isro} CardLoc="ISRO" imgWidth="280px" imgHeight="150px" Title="Internship" data="This is my Internship company" link= "https://www.isro.gov.in/VSSC.html"  btnhead="Go to Company site" />
        </div>
    </div>
    
    <br /><br /><br /><br /><br />
    </section>
    <section className="section section-2">
      <h2 style={{ textAlign: "center",color: "#47ff22" }}> <u> - Achievements - </u></h2>
       <br /><br /><br /><br /><br />

      <div className="slider">
        <div className="slider-track">
      <Image source={First} imageloc="First"></Image> 
      <Image source={second} imageloc="Second"></Image> 
      <Image source={third} imageloc="third"></Image> 
      <Image source={fourth} imageloc="fourth"></Image> 
      <Image source={fifth} imageloc="fifth"></Image> 
      <Image source={sixth} imageloc="sixth"></Image> 
      <Image source={First} imageloc="First"></Image> 
      <Image source={second} imageloc="Second"></Image> 
      <Image source={third} imageloc="third"></Image> 
      </div>
      </div>
      <br /><br /><br />


      <h2 style={{textAlign:"center" , color:"#47ff22"}}> <u> - Education - </u></h2>
       <br /><br /><br />
       
      <h2 style={{textAlign:"center" , color:"#ccebc6"}}> Bachlor Of Engineering (computer Science)</h2><br />
      <h2 style={{textAlign:"center" , color:"#e8f0e7"}}> <u>University</u> </h2><br />
      <h3 style={{textAlign:"center" , color:"#eff7ed"}}>Sant Gadge Baba University Amravati</h3><br />
      <h3 style={{textAlign:"center" , color:"#ebf5e9"}}>Sipna collage of Engineerng and Technology Amravati</h3>
 
      <br /><br /><br />
      </section>
      <section className="section section-3">
      <h2 style={{textAlign:"center" , color:"#47ff22"}}> <u> - Certificates - </u></h2>
      <br /><br /><br />

      <div className="container my-4">
    <div className="row justify-content-center">
    
    <div className="col-md-4">
      <Cards CardName={Isro}  CardLoc="isro" imgWidth="250px" imgHeight="130px" Title="Project Completion" data="ISRO Project Completion " link= "https://www.linkedin.com/posts/prashik-gadge-737bb3221_isro-vikram-sarabhai-space-centerafter-activity-7152584544833994752-4EVE"  btnhead="View Certificate"></Cards>
    </div>
     <div className="col-md-4">
      <Cards CardName={dipex}  CardLoc="dipex" imgWidth="250px" imgHeight="130px" Title="DIPEX Project" data="State level Hackathon  " link= "https://www.linkedin.com/posts/prashik-gadge-737bb3221_dipex-2023-activity-7081109231969472512-5wPu"  btnhead="View Certificate"></Cards>
    </div>
    <div className="col-md-4">
      <Cards CardName={Ibs}  CardLoc="IBS" imgWidth="250px" imgHeight="130px" Title="Work Recognition" data="Office Recognition  " link= "https://image2url.com/images/1763896196479-451f0ef9-53c8-4bb5-bfe6-bdfda54614f9.png"  btnhead="View Certificate"></Cards>
    </div>
    </div>
    </div>
    <br /><br /><br /> <br /><br /><br /><br /><br /><br />

    <p> <h5 style={{textAlign:"center" , color:"#ebf3ea"}}> This site is designed and manintained by myself. </h5>
    <br /><h5 style={{textAlign:"center" , color:"#ebf3ea"}} ><a  href="mailto:prashikg73@gmail.com">prashikg73@gmail.com</a></h5></p>
    </section>
    </div>
    </>
  );
}

export default App;
