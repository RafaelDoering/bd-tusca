import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-add-modalidade',
  templateUrl: './add-modalidade.component.html',
  styleUrls: ['./add-modalidade.component.scss']
})
export class AddModalidadeComponent {
  addModalidadeForm = this.fb.group({
    nome: [''],
    genero: [''],
    unidadePontuacao: [''],
    descricao: [''],
    tipo: [''],
  });

  onSubmit() {
    const form = this.addModalidadeForm.value;

    this.apiService.criarModalidade(form.nome, form.genero, form.unidadePontuacao, form.descricao, form.tipo).subscribe((res) => {
      console.log(res);
    });
  }

  constructor(private fb: FormBuilder, private apiService: ApiService) { }
}
