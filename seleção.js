const c = (el)=>document.querySelector(el);
const cs =(el)=>document.querySelectorall(el);

modelsJson.map((item, index)=>{
    let modelsItem = c('.models .models_item').cloneNode(true);
    modelsItem.querySelectorall('.models_iten_name')innerHTML =item.name;
    modelsItem.querySelectorall('.models_iten_desc')innerHTML =item.description;
    c('.models_area').append(modelsItem);
});