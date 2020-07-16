This component was bootstrapped with [Direflow](https://direflow.io).

# Syo Whats App
> This project is created using Direflow

```html
<syo-whats-app from="5551998406095" to="5551998406094"></syo-whats-app>
```

| propriedade | descricao |
| ---- | ------ | 
| from |  numero cedido pela infobip para conversação   |
| to   | numero do cliente que devemos entrar em contato|



```mermaid
graph TD
  A[Apresentacao] -->|apresentacao| C{Em que podemos te ajudar?}
  C -->|Veiculo 0km| D[Laptop]
  C -->|Veiculo Seminovo| E[iPhone]
  C -->|Oficina| F[fa:fa-wrench Car]
		
```