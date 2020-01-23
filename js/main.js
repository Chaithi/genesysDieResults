/**
 * Genesys Magic Calculator.
 *
 * Provides players a way to build spells.
 *
 * @link   https://gdr.gamergadgets.net
 * @author Robert Thayer
 * @since  01.23.2020
 * @version 0.2b
 */

let combat = document.getElementById("combat"),
    social = document.getElementById("social"),
    magic = document.getElementById("magic"),
    hacking = document.getElementById("hacking"),
    fear = document.getElementById("fear"),
    crafting = document.getElementById("crafting"),
    alchemy = document.getElementById("alchemy"),
    enchanting = document.getElementById("enchanting"),
    assensing = document.getElementById("assensing"),
    rot = document.getElementById("rot"),
    sotb = document.getElementById("sotb"),
    sr = document.getElementById("sr"),
    types = [combat, social, magic, hacking, fear, crafting, alchemy, enchanting, assensing],
    goodTables = Array.from(document.getElementsByClassName("good")),
    badTables = Array.from(document.getElementsByClassName("bad")),
    rotButtons = Array.from(document.getElementsByClassName("rot")),
    sotbButtons = Array.from(document.getElementsByClassName("sotb")),
    srButtons = Array.from(document.getElementsByClassName("sr")),
    runnerItems = Array.from(document.getElementsByClassName("runner")),
    sysopItems = Array.from(document.getElementsByClassName("sysop"));
    
dice();
    

function showType(type) {
    types.forEach(div => div.classList.add("d-none"));
    type.classList.remove("d-none");
}

function showTable(type) {
    if (type == "good") {
        goodTables.forEach(table => table.classList.remove("d-none"));
        badTables.forEach(table => table.classList.add("d-none"));
    } else if (type == "bad") {
        badTables.forEach(table => table.classList.remove("d-none"));
        goodTables.forEach(table => table.classList.add("d-none"));
    } else if (type == "runner") {
        runnerItems.forEach(table => table.classList.remove("d-none"));
        sysopItems.forEach(table => table.classList.add("d-none"));
    } else {
        runnerItems.forEach(table => table.classList.add("d-none"));
        sysopItems.forEach(table => table.classList.remove("d-none"));
    }
}

function setSources() {
    if (rot.checked)
        rotButtons.forEach(btn => btn.classList.remove("d-none"));
    else
        rotButtons.forEach(btn => btn.classList.add("d-none"));
    if (sr.checked)
        srButtons.forEach(btn => btn.classList.remove("d-none"));
    else
        srButtons.forEach(btn => btn.classList.add("d-none"));
}

function dice() {
    //Array.from(document.getElementsByClassName("a")).forEach(el => el.innerHTML = '<img src="img/a.png">');
    //Array.from(document.getElementsByClassName("aa")).forEach(el => el.innerHTML = '<img src="img/aa.png">');
    //Array.from(document.getElementsByClassName("aaa")).forEach(el => el.innerHTML = '<img src="img/aaa.png">');
    //Array.from(document.getElementsByClassName("aaaa")).forEach(el => el.innerHTML = '<img src="img/aaaa.png">');
    //Array.from(document.getElementsByClassName("aaaaa")).forEach(el => el.innerHTML = '<img src="img/aaaaa.png">');
    Array.from(document.getElementsByClassName("ad")).forEach(el => el.innerHTML = '<img src="img/v.png">');
    Array.from(document.getElementsByClassName("adad")).forEach(el => el.innerHTML = '<img src="img/vv.png">');
    Array.from(document.getElementsByClassName("adadad")).forEach(el => el.innerHTML = '<img src="img/vvv.png">');
    Array.from(document.getElementsByClassName("b")).forEach(el => el.innerHTML = '<img src="img/b.png">');
    //Array.from(document.getElementsByClassName("bb")).forEach(el => el.innerHTML = '<img src="img/bb.png">');
    Array.from(document.getElementsByClassName("d")).forEach(el => el.innerHTML = '<img src="img/d.png">');
    Array.from(document.getElementsByClassName("dd")).forEach(el => el.innerHTML = '<img src="img/dd.png">');
    Array.from(document.getElementsByClassName("ddd")).forEach(el => el.innerHTML = '<img src="img/ddd.png">');
    //Array.from(document.getElementsByClassName("dddd")).forEach(el => el.innerHTML = '<img src="img/dddd.png">');
    //Array.from(document.getElementsByClassName("ddddd")).forEach(el => el.innerHTML = '<img src="img/ddddd.png">');
    Array.from(document.getElementsByClassName("de")).forEach(el => el.innerHTML = '<img src="img/de.png">');
    Array.from(document.getElementsByClassName("dede")).forEach(el => el.innerHTML = '<img src="img/dede.png">');
    Array.from(document.getElementsByClassName("f")).forEach(el => el.innerHTML = '<img src="img/f.png">');
    //Array.from(document.getElementsByClassName("ff")).forEach(el => el.innerHTML = '<img src="img/ff.png">');
    Array.from(document.getElementsByClassName("s")).forEach(el => el.innerHTML = '<img src="img/s.png">');
    Array.from(document.getElementsByClassName("ss")).forEach(el => el.innerHTML = '<img src="img/ss.png">');
    Array.from(document.getElementsByClassName("sb")).forEach(el => el.innerHTML = '<img src="img/sb.png">');
    Array.from(document.getElementsByClassName("sbsb")).forEach(el => el.innerHTML = '<img src="img/sbsb.png">');
    Array.from(document.getElementsByClassName("t")).forEach(el => el.innerHTML = '<img src="img/t.png">');
    Array.from(document.getElementsByClassName("tt")).forEach(el => el.innerHTML = '<img src="img/tt.png">');
    Array.from(document.getElementsByClassName("ttt")).forEach(el => el.innerHTML = '<img src="img/ttt.png">');
    Array.from(document.getElementsByClassName("tr")).forEach(el => el.innerHTML = '<img src="img/tr.png">');
}