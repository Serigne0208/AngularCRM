import { Component, OnInit } from '@angular/core';
import { ConsumerService } from '../consumer.service';
import { Observable } from 'rxjs';
import { Consumer } from '../model/consumer';
import { AsyncPipe, NgFor } from '@angular/common';
import { PhonePipe } from '../../common/phone.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'crm-consumer-list',
  standalone: true,
  imports: [AsyncPipe, NgFor,PhonePipe, FormsModule],
  templateUrl: './consumer-list.component.html',
  styleUrl: './consumer-list.component.scss'
})



export class ConsumerListComponent implements OnInit {
  consumersObs?: Observable<Consumer[]>;
  searched : string = '';
      constructor(private consumerService : ConsumerService){
      }

  ngOnInit(): void {
    this.consumersObs = this.consumerService.getlist();
  }

  search(): void{
    this.consumersObs = this.consumerService.filterConsumers(this.searched);
    console.log(this.searched);
  }

}
