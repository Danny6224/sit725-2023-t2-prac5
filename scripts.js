// const cardList = [{
//     title: 'Interstellar',
//     path: 'Image/interstellar.jpg', 
//     subTitle: 'Adventure.Drama.Sci-Fi',
//     description: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.'
// },
// {
//     title: 'Tenet',
//     path: 'Image/Tenet_movie_poster.jpg',
//     subTitle: 'Action.Sci-Fi.Thriller',
//     description: 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.'
// },
// {
//     title: 'Oppenheimer',
//     path: 'Image/oppenheimer.jpeg',
//     subTitle: 'Biography.Drama.History',
//     description: 'The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.'
// }];

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
                '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.path+'">'+
                '</div><div class="card-content">'+
                '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.subTitle+'</a></p></div>'+
                '<div class="card-reveal">'+
                '<span class="card-title grey-text text-darken-4">'+item.subTitle+'<i class="material-icons right">close</i></span>'+
                '<p class="card-text">'+item.description+'</p>'+
                '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}

const formSumitted = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.subTitle = $('#subTitle').val();
    formData.path = $('#path').val();
    formData.description = $('#description').val();

    console.log(formData);
    postCat(formData);
}

function postCat(cat){
    $.ajax({
        url:'/api/cat',
        type:'POST',
        data:cat,
        success: (result)=>{
            if (result.statusCode === 201) {
                alert('cat added');
            }
        }
    });
}

function getAllCats(){
    $.get('/api/cat', (result) => {
        if (result.statusCode === 200) {
            addCards(result.data);
        }
    });
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        formSumitted();
    });
    $('.modal').modal();
    getAllCats();
    console.log('ready');
});