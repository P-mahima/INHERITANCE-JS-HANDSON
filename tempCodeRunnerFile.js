const parent ={
    name : "Mahima",
    show : function(){
        console.log('Hii I am mahima....!!!');
    }
}
const child = Object.create(parent)
console.log(child.name);
child.show();