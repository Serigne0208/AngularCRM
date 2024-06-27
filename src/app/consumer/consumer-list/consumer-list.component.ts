import { Component, OnInit } from '@angular/core';
import { ConsumerService } from '../consumer.service';
import { Observable } from 'rxjs';
import { Consumer } from '../model/consumer';
import { AsyncPipe, NgFor } from '@angular/common';
import { PhonePipe } from '../../common/phone.pipe';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'crm-consumer-list',
  standalone: true,
  imports: [AsyncPipe, NgFor, PhonePipe, FormsModule, MatIconModule,
    MatIconButton, RouterLink],
  templateUrl: './consumer-list.component.html',
  styleUrl: './consumer-list.component.scss'
})



export class ConsumerListComponent implements OnInit {
  consumersObs?: Observable<Consumer[]>;
 
  searched: string = '';
  constructor(private consumerService: ConsumerService) {
  }

  ngOnInit(): void {
    this.consumersObs = this.consumerService.getlist();
  }

  search(): void {
    this.consumersObs = this.consumerService.filterConsumers(this.searched);
    console.log(this.searched);
  }

  deleteConsumer(consumerId: number): void {
    console.log(consumerId);
    this.consumerService.deleteConsumerById(consumerId).subscribe({
      next: (data: Consumer) => {
        if (this.searched) {
          this.consumersObs = this.consumerService.filterConsumers(this.searched);
        }
        else {
          this.consumersObs = this.consumerService.getlist();
        }
      },
      error: (error: Error) => { alert(error) },
      complete: () => { }
    })
  }
}
