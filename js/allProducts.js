const allProductBtn = document.getElementById('allProductBtn');
const buttonSaveFilter = document.getElementById('buttonSaveFilter');
const filtersAvailabilityBtn = document.getElementById('filtersAvailabilityBtn');
const allProductHeader = document.getElementById('allProductHeader');
allProductBtn.addEventListener('click', showAllProduct);
buttonSaveFilter.addEventListener('click', getCheckedCheckBoxes);
filtersAvailabilityBtn.addEventListener('click', checkAvailability);

document.getElementById("filters-minPriceBtn").oninput = function () {
    let minPriceSlider = document.getElementById('filters-minPriceBtn');
    let minPriceInput = document.getElementById('filters-minPriceValue');
    minPriceInput.value = minPriceSlider.value;
}
document.getElementById("filters-maxPriceBtn").oninput = function () {
    let minPriceSlider = document.getElementById('filters-maxPriceBtn');
    let minPriceInput = document.getElementById('filters-maxPriceValue');
    minPriceInput.value = minPriceSlider.value;
}

function showAllProduct() {
    removeSort('ascendingAllProducts', 'descendingAllProducts', 'filtersAvailabilityBtn');
    document.getElementById('allProducts').textContent = '';
    pageCleanup();
    document.getElementById('allProductPage').classList.remove('hidden');
    allProductHeader.classList.remove('hidden');
    allProductHeader.className = 'allProductPage-title';
    document.getElementById('saleHeader').className = 'hidden';
    filtersAvailabilityBtn.classList.remove('hidden');
    filtersAvailabilityBtn.className = 'filter-availabilityBtn';
    
    // фильтр по типу
    showFilters();

    const allProducts = document.getElementById('allProducts');
    let index = 0;
    let indexParent = 0;
    let indexChild = 0;
    let availability;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].products.length; j++){
            if (data[i].products[j].availability === 0) {
                availability = 'is expected';
            } else {
                availability = 'on sale';
            }
            createElement('div', { id: `card${index}`, className: data[i].name, 'data-priceAllProducts' : data[i].products[j].price }, null, null, allProducts);
            let elem = document.getElementById(`card${index}`);
            elem.classList.add('allProducts-card');
            elem.classList.add('showAllProducts');
            elem.classList.add(data[i].products[j].color);
            createElement('span', { className: 'allProductName'}, null, data[i].products[j].name, elem);
            createElement('img', { id: `img${index}`, src: data[i].products[j].main_images , className: 'allProductImg' }, null, null, elem);
            createElement('span', {id: data[i].products[j].price , className: 'allProductPrice' }, null, `${data[i].products[j].price} UAH`, elem);
            createElement('span', { id: `availability${index}`, className: 'allProductAvailability' }, null, availability, elem);
            createElement('button', { type: 'button', className: 'allProduct_btn', 'data-category':indexParent, 'data-product': indexChild }, { click: showProductPage }, 'explore', elem);
            let card = document.getElementById(`card${index}`);
            if (availability === 'is expected') {  
                let elem = document.getElementById(`availability${index}`);
                elem.classList.add('filter-notAviability');
                card.classList.add('allProducts-card__notActive');
            }
            index++;
            indexChild++;
        }
        indexParent++;
        indexChild = 0;
    }
}
function showFilters() {
    const fieldsetType = document.getElementById('filtersType');
    const typeArr = ['PHONES', 'LAPTOPS', 'WATCHES', 'TABLETS', 'ALL_PRODUCTS'];
    for (let i = 0; i < typeArr.length; i++) {
        let label = createElement('label', { className: 'filters-form__label' }, null, typeArr[i], fieldsetType);
        createElement(
            'input',
            { className: 'filters-form__input', name: "typeProduct", type:"checkbox", value: typeArr[i]},
            null,
            null,
            label
        );
    }
    const fieldsetColor = document.getElementById('fieldsetColor');
    const colorArr = ['Black', 'Silver', 'White', 'Gold', 'Pink', 'Purple', 'Green', 'Gray', 'Blue', 'Yellow', 'Red', 'Chocolate', 'Brown', 'All_Color'];
     for (let i = 0; i < colorArr.length; i++) {
        let label = createElement('label', { className: 'filters-form__label' }, null, colorArr[i], fieldsetColor);
        createElement(
            'input',
            { className: 'filters-form__color', name: "colorProduct", type:"checkbox", value: colorArr[i]},
            null,
            null,
            label
        );
    }
}
{/* <label class="filters-form__label"><input class="filters-form__color" name="colorProduct" id="Black" type="checkbox" */}
//         value="Black">Black</label>
// <label class="filters-form__label"><input class="filters-form__color" name="colorProduct" id="Silver"
//         type="checkbox" value="Silver">Silver</label>
// <label class="filters-form__label"><input class="filters-form__color" name="colorProduct" id="White" type="checkbox"
//         value="White">White</label>
// <label class="filters-form__label"><input class="filters-form__color" name="colorProduct" id="Gold" type="checkbox"
//         value="Gold">Golden</label>
// <label class="filters-form__label"><input class="filters-form__color" name="colorProduct" id="Pink" type="checkbox"
//         value="Pink">Pink</label>
// <label class="filters-form__label"><input class="filters-form__color" name="colorProduct" id="Purple"
//         type="checkbox" value="Purple">Purple</label>
// <label class="filters-form__label"><input class="filters-form__color" name="colorProduct" id="Green" type="checkbox"
//         value="Green">Green</label>
// <label class="filters-form__label"><input class="filters-form__color" name="colorProduct" id="Gray" type="checkbox"
//         value="Gray">Gray</label>
// <label class="filters-form__label"><input class="filters-form__color" name="colorProduct" id="Blue" type="checkbox"
//         value="Blue">Blue</label>
// <label class="filters-form__label"><input class="filters-form__color" name="colorProduct" id="Yellow"
//         type="checkbox" value="Yellow">Yellow</label>
// <label class="filters-form__label"><input class="filters-form__color" name="colorProduct" id="Chocolate"
//         type="checkbox" value="Chocolate">Chocolate</label>
// <label class="filters-form__label"><input class="filters-form__color" name="colorProduct" id="Brown" type="checkbox"
//         value="Brown">Brown</label>
// <label class="filters-form__label"><input class="filters-form__color" name="colorProduct" id="Red" type="checkbox"
//         value="Red">Red</label>
// <label class="filters-form__label"><input class="filters-form__color" name="colorProduct" id="ALLColor"
//         type="checkbox" value="ALLColor">All Color</label>
function getCheckedCheckBoxes() {
    // убираем сортировку
    removeSort('ascendingAllProducts', 'descendingAllProducts', 'filtersAvailabilityBtn');
    // находим все товары
    let allProductsArr = document.getElementsByClassName('allProducts-card');
    for (let i = 0; i < allProductsArr.length; i++) {
        allProductsArr[i].classList.remove('showAllProducts');
        allProductsArr[i].classList.remove('selectedColor');
        allProductsArr[i].classList.add('hiddenAllProducts');
    }
    // довляем в массив классы которые выбрал пользователь 
    const checkboxes = document.getElementsByClassName('filters-form__input');
    const typeArr = ['PHONES', 'LAPTOPS', 'WATCHES', 'TABLETS'];
    const countType = checkboxes.length;
    let checkboxesChecked = findFilter(checkboxes, typeArr, countType);

    // скрываем или показываем выбраный тип продуктов
    for (let i = 0; i < checkboxesChecked.length; i++) {
        let elem = document.getElementsByClassName(checkboxesChecked[i]);
        for (let j = 0; j < elem.length; j++) {
            elem[j].classList.remove('hiddenAllProducts');
            elem[j].classList.add('showAllProducts');
        }
    }
    // довляем в массив цвета которые выбрал пользователь
    const checkboxesColor = document.getElementsByClassName('filters-form__color');
    const colorArr = ['Black', 'Silver', 'White', 'Golden', 'Pink', 'Purple', 'Green', 'Gray', 'Blue', 'Yellow', 'Red', 'Chocolate', 'Brown',];
    const countColor = checkboxesColor.length;
    let checkboxesColorChecked = findFilter(checkboxesColor, colorArr, countColor);

    // среди выбраных продуктов выбираем цвет
    let selectedProductsArr = document.getElementsByClassName('showAllProducts');
    for (let i = 0; i < selectedProductsArr.length; i++) {
        for (let j = 0; j < checkboxesColorChecked.length; j++) {
            if (selectedProductsArr[i].classList.contains(checkboxesColorChecked[j])) {
                selectedProductsArr[i].classList.add('selectedColor');
            }
        }
    }
    for (let i = 0; i < selectedProductsArr.length; i++) {
        for (let j = 0; j < checkboxesColorChecked.length; j++) {
            if (!selectedProductsArr[i].classList.contains('selectedColor')) {
                selectedProductsArr[i].classList.add('hiddenAllProducts');
            }
        }
    }
// фильтр по мин цене
    let minPriceSlider = document.getElementById('filters-minPriceValue');
    let minPriseArr = [];
    if (minPriceSlider.value != 0) {
        for (let i = 0; i < allProductsArr.length; i++) {
        if (allProductsArr[i].classList.contains('selectedColor')) {
            minPriseArr.push(allProductsArr[i]);
            }
        }        
        for (let i = 0; i < minPriseArr.length; i++) {
            if (Number(minPriseArr[i].childNodes[2].id) < Number(minPriceSlider.value)) {
                minPriseArr[i].classList.add('hiddenAllProducts');
                minPriseArr[i].classList.remove('selectedColor');
            } 
        }
    }
// фильтр по макс цене
    let maxPriceSlider = document.getElementById('filters-maxPriceValue');
    let maxPriseArr = [];
    if (maxPriceSlider.value != 0) {
        console.log(maxPriceSlider.value);
        for (let i = 0; i < allProductsArr.length; i++) {
        if (allProductsArr[i].classList.contains('selectedColor')) {
            maxPriseArr.push(allProductsArr[i]);
            }
        }        
        for (let i = 0; i < maxPriseArr.length; i++) {
            if (Number(maxPriseArr[i].childNodes[2].id) > Number(maxPriceSlider.value)) {
                console.log(maxPriseArr[i].childNodes[2].id);
                maxPriseArr[i].classList.add('hiddenAllProducts');
                maxPriseArr[i].classList.remove('selectedColor');
            } 
        }
    }
}
function findFilter(inputArr, filterArr, count) {
    let countType = 0;
    let selectedFilter = [];
        for (let i = 0; i < inputArr.length; i++) {
            if (inputArr[i].checked) {
                if (inputArr[i].value == 'ALL_PRODUCTS'|| inputArr[i].value == 'All_Color' ) {
                    for (let i = 0; i < filterArr.length; i++) {
                        selectedFilter.push(filterArr[i]);
                    }
                } else {
                    selectedFilter.push(inputArr[i].value);
                } 
            } else {
                countType++;
            }
        }
        if (countType === count) {
            selectedFilter = filterArr;
        }
    return selectedFilter;
}
// наличие
// document.getElementById('filtersAvailabilityBtn').addEventListener('click', checkAvailability);
function checkAvailability () {
    let btn = document.getElementById('filtersAvailabilityBtn');
    if (btn.classList.contains('activ_btn_sort')) {
        btn.classList.remove('activ_btn_sort');
        let hiddenCardAvailability = document.getElementsByClassName('notAvailability');
        for (let i = 0; i < hiddenCardAvailability.length; i++) {
            hiddenCardAvailability[i].classList.remove('hiddenAllProducts');
        }
    } else {
        btn.classList.add('activ_btn_sort');
        let notAvailability = document.getElementsByClassName('allProducts-card__notActive');
        for (let i = 0; i < notAvailability.length; i++) {
            notAvailability[i].classList.add('hiddenAllProducts');
            notAvailability[i].classList.add('notAvailability');
        }
    }
}
// убираем сортировку! Передаем Id кнопок 
function removeSort(ascending, descending, availability ) {
    let btnAscending = document.getElementById(ascending) ;
    let btnDescending = document.getElementById(descending);
    let btnAvailability = document.getElementById(availability);
    if (btnAscending.classList.contains('activ_btn_sort')) {
        btnAscending.classList.remove('activ_btn_sort');
    }
    if (btnDescending.classList.contains('activ_btn_sort')) {
        btnDescending.classList.remove('activ_btn_sort');
    }
    if (btnAvailability.classList.contains('activ_btn_sort')) {
        btnAvailability.classList.remove('activ_btn_sort');
    }
}
// сортировка
document.getElementById('ascendingAllProducts').addEventListener('click', () => {
    sortAscendingAllProducts ('data-priceAllProducts');
    document.getElementById('ascendingAllProducts').classList.add('activ_btn_sort');
    document.getElementById('descendingAllProducts').classList.remove('activ_btn_sort');
});
document.getElementById('descendingAllProducts').addEventListener('click', () => {
    sortDescendingAllProducts('data-priceAllProducts');
    document.getElementById('descendingAllProducts').classList.add('activ_btn_sort');
    document.getElementById('ascendingAllProducts').classList.remove('activ_btn_sort');
});
function sortAscendingAllProducts(sortType) {
    let parent = document.querySelector(".allProductsList");
    for(let i = 0; i < parent.children.length; i++) {
        for(let j = i; j < parent.children.length; j++) {
            if (+parent.children[i].getAttribute(sortType) > +parent.children[j].getAttribute(sortType)) {
                replaceNode = parent.replaceChild(parent.children[j], parent.children[i]);
                insertAfter(replaceNode, parent.children[i]);
            }
        }
    }
}
function sortDescendingAllProducts(sortType) {
    let parent = document.querySelector(".allProductsList");
    for(let i = 0; i < parent.children.length; i++) {
        for(let j = i; j < parent.children.length; j++) {
            if (+parent.children[i].getAttribute(sortType) < +parent.children[j].getAttribute(sortType)) {
                replaceNode = parent.replaceChild(parent.children[j], parent.children[i]);
                insertAfter(replaceNode, parent.children[i]);
            }
        }
    }
}
function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}








