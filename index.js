const minEnergy = 0;
const innitialEnergy = 10;
const lowEnergy = 4;

let  energy = 10;


while(energy >= minEnergy) {
    console.log(`Energy: ${energy}`);

    if(energy === minEnergy) {
        console.log("Robot is tired... he needs rest");
    } else if(energy <= lowEnergy) {
        console.log("Robot starts tired and hungry");
    } else {
        console.log("Robot is good");
    }
    energy -= 2;
}




































