import React from 'react';

import { CompanyWrapper } from './styles';

export const Company = () => (
  <CompanyWrapper>
    <ul className="primary">
      <li>
        <span />
        Sobre a stripe
      </li>
      <li>
        <span />
        Clientes
      </li>
      <li>
        <span />
        Corporativo
      </li>
      <li>
        <span />
        Parceiros
      </li>
      <li>
        <span />
        Empregos
      </li>
      <li>
        <span />
        Meio ambiente
      </li>
      <li>
        <span />
        Notícias
      </li>
    </ul>
    <ul className="secondary">
      <li className="title">
        <span className="title-icon" />
        Do blog
      </li>
      <li>
        Pagamentos sem necessidade de código
        <span className="new-tag">Novo</span>
        <span className="arrow">{'>'}</span>
      </li>
      <li>
        Apresentando o portal do cliente
        <span className="arrow">{'>'}</span>
      </li>
      <li>
        Transferencia online 
        <span className="arrow">{'>'}</span>
      </li>
    </ul>
  </CompanyWrapper>
);
