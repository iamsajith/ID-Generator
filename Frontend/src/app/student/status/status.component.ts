import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  newdata:any
  myAngularxQrCode: string = ""
  restricted = true
  text:string = ""

 @ViewChild('downloadfile',{static:false}) downloadfile!:ElementRef

  constructor(private _student:StudentService) {
    this.myAngularxQrCode = 'Your QR code data string';
   }

  
  
  makepdf(){
    let DATA: any = document.getElementById('downloadfile');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 100;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/svg');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('idcard.pdf');
    });
  }



  ngOnInit(): void {
  this.restricted = true
  const id = localStorage.getItem("id") 
  this._student.getID(id).subscribe((data)=>{
    console.log(data)
    this.newdata = JSON.parse(JSON.stringify(data))
    console.log(this.newdata)
    this.text = `Phone : ${this.newdata.phone} | Email : ${this.newdata.email} | Batch : ${this.newdata.batch} | Issue Date : ${this.newdata.startDate}`
    if(this.newdata.status === 'Accepted'){
      this.restricted = false
    }

  })


  }

}
