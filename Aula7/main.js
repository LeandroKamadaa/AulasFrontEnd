import chalk from 'chalk'



for (let r = 255; r > 127; r=r-10){
    console.log(chalk.rgb(r,0,0)("A"))
    
}
for(let g = 255; g > 127; g=g-10){
    console.log(chalk.rgb(0,g,0)("A"))
    
}
for (let b = 255; b > 127; b=b-10){
    console.log(chalk.rgb(0,0,b)("A"))
}






