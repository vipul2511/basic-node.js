var rect=require('./areas')
function answer(l,b) {
    console.log("perimeter for rectangle with l="+l+"and b="+b);
    if(l<=0 || b<=0){
        console.log("rectangle dimension should be with l= "+l +"and  b="+b);
    }
    else{
        console.log("the area of rectangle with l="+rect.area(l,b));
        console.log("the perimeter of rectangle is "+rect.perimeter(l,b));
    }
}

answer(2,6);
answer(4,7);
answer(0,3);
answer(-1,7);