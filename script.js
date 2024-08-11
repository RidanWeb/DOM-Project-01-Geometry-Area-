//Area of traingle =============================
document.getElementById('triangle-btn').addEventListener('click', function(){

    const base = inputValue('baseOfTri');
    const height = inputValue('heightOfTri');
    const area = 0.5 * base * height;

    setInnerText('calculatedArea', area)
    setAreaInCalculationArea('Traingle', area)
})

//Area of Ractangle;=================

function areaOfRactangle(){

    const wide = inputValue('wideOfRac');
    const length = inputValue('lengthtOfRac');
    const area = wide * length;

    setInnerText('calculatedRacArea', area)
    setAreaInCalculationArea('Ractangle', area)

}


//Area of Parallelogram=================

function areaOfParallelogram(){

    const base = inputValue('baseOfPara');
    const height = inputValue('heightOfPara');
    const area = 0.5 * base * height;

    setInnerText('calculatedParaArea', area);
    setAreaInCalculationArea('Parallelogram', area);

}


//Area of Rhombus=================

function areaOfRhombus(){

    const d1 = inputValue('d1OfRhom');
    const d2 = inputValue('d2OfRhom');
    const area = 0.5 * d1 * d2;

    setInnerText('calculatedRhomArea', area);
    setAreaInCalculationArea('Rhombus', area);

}







//get and return base value=========================
function inputValue(BaseIdValue){

    const inputValue = document.getElementById(BaseIdValue);
    const inputValueText = inputValue.value;
    const getValue = parseFloat(inputValueText);
    
    return getValue;

}

//set Inner text of Area==========================
function setInnerText(locationId, area){

    const getLocationId = document.getElementById(locationId);
    getLocationId.innerText = area;
}

function setAreaInCalculationArea(name, area){

    const getArea = document.getElementById('AreaOfCalculation');
    const ol = document.createElement('ol');
    const li = document.createElement('li');
    li.innerText =  name + ' ' + area + ' cm2';

    getArea.append(ol);
    ol.append(li);
}