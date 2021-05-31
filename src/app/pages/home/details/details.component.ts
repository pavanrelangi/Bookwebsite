import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import{CommentsService} from '../../../service/comments.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:any
  comments:any;
  record:any;
    constructor(private route:ActivatedRoute,private bs:BookService,private css:CommentsService) {
        route.params.subscribe(params=>
             this.id=params['id']);
             this.bs.getOverview(this.id).subscribe(
               (data)=>this.record = data,
               ()=>this.record={}
             )

             this.css.getComment(this.id).subscribe(
              (data)=>this.comments = data,
              ()=> this.comments =""
          )
         }

  ngOnInit(): void {
  }
add(){
  alert("Added successfully")
}
}
