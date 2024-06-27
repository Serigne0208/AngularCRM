import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ConsumerService } from '../consumer.service';
import { Consumer } from '../model/consumer';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'crm-consumer-fiche',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './consumer-fiche.component.html',
  styleUrl: './consumer-fiche.component.scss'
})
export class ConsumerFicheComponent implements OnInit, OnDestroy{
  createForm: FormGroup;
   private subs: Subscription[] = []
   consumerObs?: Observable<Consumer[]> | undefined;
   private consumer?: Consumer;
   
  constructor(private consumerService: ConsumerService,
      private router : Router , private route: ActivatedRoute){
    this.createForm = new FormGroup({
      civility: new FormControl('', [Validators.required]),
      firstname: new FormControl('' ),
      lastname: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl('', ),
    })
  }
  ngOnDestroy(): void {
   this.subs.forEach(sub=>sub.unsubscribe());
  }

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id')!;
    if(id){
        this.consumerService.getConsumerById(id).subscribe({
          next:(consumer: Consumer)=>{
            this.consumer = consumer,
            this.createForm.patchValue(this.consumer)
          },
          error:(error: Error)=>{alert(error)},
          complete: ()=>{}
         }); 
      }    
  }
  create(): void {
    this.subs.push(  this.consumerService.createConsumers(
        {...this.consumer,...this.createForm.value}
      ).subscribe({
        next:(data: Consumer)=>{this.router.navigateByUrl('/consumer')},
        error:(error: Error)=>{alert(error)},
        complete: ()=>{}
           
      }));
  }

  
}
