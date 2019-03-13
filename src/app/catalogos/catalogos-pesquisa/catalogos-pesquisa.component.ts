import { Title } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AsyncValidatorFn, AbstractControl } from '@angular/forms';

import { Observable, of } from 'rxjs';

import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

import { FormsUtil } from './../../core/utils';
import { Disco, GeneroEnum } from './../../core/model';
import { CatalogosService, DiscoFiltro } from '../catalogos.service';


@Component({
  selector: 'app-catalogos-pesquisa',
  templateUrl: './catalogos-pesquisa.component.html',
  styleUrls: ['./catalogos-pesquisa.component.css']
})
export class CatalogosPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new DiscoFiltro();
  discos = [];

  generos = GeneroEnum;

  formulario: FormGroup;

  isFinalizar = false;
  formSubmit = false;

  constructor(
    private formBuilder: FormBuilder,
    private catalogosService: CatalogosService,
    private messageService: MessageService,
    private confirmation: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Catalogo de disco');
    this.configurarFormulario();

    this.catalogosService.pesquisar(
      { nome: 'rocke', genero: GeneroEnum.ROCK, pagina: 0, itensPorPagina: 5 }
    ).subscribe(
      response => {
        this.discos = response;
        console.log(this.discos);
      },
      erro => {
        console.error(erro);
      }
    );

  }


  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.catalogosService.pesquisar(this.filtro)
      .subscribe(
        resultado => {
          this.totalRegistros = resultado.total;
          this.discos = resultado.lancamentos;
        },
        erro => console.log(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }


  selecionarDisco(event, disco: Disco) {

  }

  confirmarExclusao(disco: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja remover do carrinho?',
      accept: () => {
        // this.removerDoCarrinho(disco);
      }
    });
  }

  // ==== configuração formularios ====
  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [],
      valor: [],
      genero: [GeneroEnum.ROCK],
      idArtista: [],
      artista: [],
      imagem: [],
      idSpotify: [],
    });
  }


}
