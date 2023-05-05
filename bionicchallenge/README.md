## Instruções passadas

## Bionic CodeChallenge
Seu desafio é criar uma aplicação Web capaz de exibir dados que são gerados a partir de "diversos dispositivos".

Instruções:
Dento da pasta AlarmGenerator há uma aplicação desenvolvida em NodeJs que simula o envio de eventos para uma API que deverá ser criada por você. Para rodar a aplicação execute os seguintes passos:
npm install
node index.js
A api desenvolvida por você deverá se capaz de receber os dados através do caminho "http://localhost:8082/alarm/";
Os dados chegarão na sua API através de uma requesição do tipo "POST" e os dados passados no body possuem o seguinte formato: { serial: '123456789', type: 1, checked: false, deviceType: 5 }
Requisitos:
1 - Os dados recebidos através a api criada por você, deverão ser salvos num banco de dados "MongoDB";
2 - A interface deverá ser capaz de exibir a lista dos dados que estão sendo salvos no banco de dados;
3 - A interface deverá permitir a filtragem por tipo de alarme e/ou por tipo de dispositivo, neste caso os campos são (type, deviceType), os tipos variam de 1 à 5, use sua criatividade para dar nome aos devices e aos tipos de alarme;
4 - A lista deverá ser atualizada automaticamente na interface;
5 - A Api deverá ser criada em NodeJs;
6 - A Interface deverá ser criada em VueJS;
Pontos Extras (Opcional):
- Paginação;
- Layout responsivo;
- Organização, estrutura de módulos, componentes, serviços e rotas;