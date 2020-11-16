var pages = ["homePageContent","workPageContent","schoolContent","aboutContent","whyApplyContent"];


function show(showing){
    pages.forEach(hide);
    document.getElementById(showing).style.display = 'block';
}

function hide(pageName){
    document.getElementById(pageName).style.display = 'none';
}