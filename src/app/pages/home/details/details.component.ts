import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:any;
  record:any;
    constructor(private route:ActivatedRoute,private bs:BookService) {
        route.params.subscribe(params=>
             this.id=params['id']);
             this.bs.getOverview(this.id).subscribe(
               (data)=>this.record = data,
               ()=>this.record={}
             )
         }

  ngOnInit(): void {
  }

}
