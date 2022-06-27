import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'situacao-cadastral',
  templateUrl: './situacao-cadastral.component.html',
  styleUrls: ['./situacao-cadastral.component.css']
})
export class SituacaoCadastralComponent implements OnInit {

  @Input() dadosUsuario : any

  constructor() { }

  ngOnInit(): void {
  }

}
