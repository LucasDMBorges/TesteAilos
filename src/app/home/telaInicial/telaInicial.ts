import { SwallUtil } from './../../shared/swalutil';
import { Validacoes } from './../../shared/validacoes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'telaInicial',
  templateUrl: './telaInicial.html',
  styleUrls: ['./telaInicial.css'],
  providers: [],
})
export class TelaInicialComponent implements OnInit {
  formCliente = this.fb.group({
    cpf:  ['', [Validators.required, Validacoes.ValidaCpf, Validacoes.isCpfDoDean]],
  });

  dadosUsuario = {
    id: 1,
    name: 'Lucas Dean Malizia Borges',
    cpf: '06419540186',
    situacao: 'regular',
    contaAplicacao: '557932-4',
    contaCorrente: '778461-8',
  };

  isCpfValid = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

  }

  consultarCpf() {
    if (this.formCliente.invalid) {
      this.isCpfValid = false;
      SwallUtil.mensagemError("CPF Invalido")
      return
    }

    SwallUtil.mensagemSucesso("CPF valido")
    this.isCpfValid = true;
  }
}

