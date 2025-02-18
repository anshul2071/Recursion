function towerOfHanoi (n, from, to, intmd) {

if(n === 1) {
    console.log(`Move disk 1 from ${from} to ${to}`);
   

}

else {
    
    if(n>1)

        {
            towerOfHanoi(n - 1, from, intmd, to);
        }

console.log(`Move disk ${n} from ${from} to ${to}`);

if(n>1){
    towerOfHanoi(n - 1, intmd, to , from);

   }

 }

}


towerOfHanoi(3, "A", "C", "B");