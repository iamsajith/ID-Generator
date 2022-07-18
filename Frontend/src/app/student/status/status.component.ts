import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  restricted = true
  status= ["Submitted","Under Review","Available"]

 @ViewChild('downloadfile',{static:false}) downloadfile!:ElementRef

  constructor() { }
  
  makepdf(){
    let DATA: any = document.getElementById('downloadfile');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 200;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('idcard.pdf');
    });
  }



  ngOnInit(): void {

  }

}
