import { Component } from '@angular/core';
import { ListspService } from './listsp.service';

@Component({
  selector: 'app-listsp',
  templateUrl: './listsp.component.html',
  styleUrls: ['./listsp.component.css']
})
export class ListspComponent {

  swimmingPools : any ;

  constructor(private service : ListspService)
  {}

  ngOnInit()
  {
    this.service.list().subscribe( r1 => { this.swimmingPools = r1});
  }
}
