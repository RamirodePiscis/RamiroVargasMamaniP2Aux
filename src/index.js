const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
        ],
        [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
        },
    };
   

// 1.- Creamos el array de los jugadores
const players1 = [
'Neuer', //PORTERO
'Pavard',
'Martinez',
'Alaba',
'Davies',
'Kimmich',
'Goretzka',
'Coman',
'Muller',
'Gnarby',
'Lewandowski'];
const players2 = [
'Burki', //PORTERO
'Schulz',
'Hummels',
'Akanji',
'Hakimi',
'Weigl',
'Witsel',
'Hazard',
'Brandt',
'Sancho',
'Gotze'];
console.log(players1);
console.log(players2);
// 2.- Creamos una variable para el portero y un array con los 10 restantes.
const gk = players1[0];
console.log(gk);
const fieldPlayers = ['Pavard',
'Martinez',
'Alaba',
'Davies',
'Kimmich',
'Goretzka',
'Coman',
'Muller',
'Gnarby',
'Lewandowski'];
console.log("fiel",fieldPlayers);

// 3.- Creamos una matriz
const allPlayers = [...players1,...players2];
console.log(allPlayers);

// 4.- Creamos un array aumentando 3 jugadores mas
const players1Final = [...players1,'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5.- Creamos la cuotas
const team1 = game.odds.team1;
console.log("TEAM1 ",team1);

const draw = game.odds.x;
console.log("DRAW ",draw);

const team2 = game.odds.team2;
console.log("TEAM2 ",team2);

// 6.- Creamos la funcion con el numero de goles de los jugadores
const printGoals = () =>{
    for(let i=0; i<allPlayers.length;){

    }
};

// 7.- 
// 8.- Calcular el promedio en un bucle
let promedio;
for(let i=0; i<1; i++){
    promedio=game.odds.team1+game.odds.x+game.odds.team2;
    promedio=promedio/3;
};
console.log(promedio);

// 9.- Objeto con los goleadores
const total={};
const goleadores= () =>{
    for(let i=0; i<allPlayers.length; i++){
        for(let j=0; j<game.scored.length; j++){
            if(allPlayers[i]===game.scored[j]){
                total=total+allPlayers[i];
            }
        }
    }
    console.log(total);
}

// 10.-
const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
    ]);

setTimeout(function(){
    for(let i=0; i<gameEvents.length; i++){
        let tot= ("PRIMER TIEMPO ", gameEvents[0],gameEvents[1]);
        return tot;
    }
},1000)