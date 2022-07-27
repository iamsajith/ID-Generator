import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/admin.service';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { NewBatchComponent } from '../new-batch/new-batch.component';


@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {



  constructor(private service: AdminService,
    public dialog: MatDialog) { }

    /*listData: MatTableDataSource<any>;*/
    displayedColumns: String[] = ['fullname','email','batch','department','actions'];

  ngOnInit(): void {

    /*this.service.getData().subscribe(
      list => {
        let array = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          
          };
          this.listData = new MatTableDataSource(array);
        });
      }
    )*/
    
  }
  onCreate(){

    this.dialog.open(NewBatchComponent);

  }
}
