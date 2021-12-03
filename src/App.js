import logo from './logo.svg';
import './App.css';
import html2canvas from "html2canvas"
import jsPDF from "jspdf"


function App() {

  const printDocument = () => {
    const input = document.getElementById('divToPrint');
    input.style.display = 'block';
    html2canvas(input, {
        scrollY: -window.scrollY,
        // allowTaint: true,
        // useCORS: true
    })
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            // setAckLetterImg(imgData)
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
            // pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.save("acknowledgement.pdf");
            // window.open(pdf.output('bloburl'), '_blank')
        })
        .then(() => {
            input.style.display = 'none';
        })
        ;
}
  return (
    <div className="App">
      
      <button style ={{marginTop:"50px", height:"50px", width:"100px", backgroundColor:"red", }} onClick = {printDocument}> Download</button> 
      <div id="divToPrint" className="mt-4" style={{
                                backgroundColor: '#fff',
                                width: '210mm',
                                minHeight: '297mm',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                textAlign: 'center',
                                // justifyContent: 'center',
                                display: 'none'
                                // border: '2px solid black',
                            }}>
                                <div className="logo-div-ack">
                                    <a href="/dashboard-user">
                                        <img id="logo" src={logo} alt="..." className="logo-img" />
                                    </a>
                                    <h1 className="logo-text">
                                        Hello
                                    </h1>
                                    <p className="copyright">
                                      Bye
                                    </p>
                                </div>
        </div>
    </div>
  );
}

export default App;
