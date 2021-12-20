var torres1 = 1;
var torres2 = 2;
var torres3 = 3;
var n = 4;



hanoi(n,torres1, torres3, torres2);

function hanoi(n, ori, des, aux)
{
if(n == 1)
    document.write("mueva el disco "+ n + "desde la torre "+ ori + "hasta la torre" + des + "<br/>");
    else{

        hanoi(n - 1, ori, aux,des);
        document.write("Mueva el disco "+ n+ "desde la torre"+ ori+ "hasta la torre "+ des + "<br/>");
        hanoi(n - 1, aux, des, ori);
    }

}