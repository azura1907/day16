// backend sẽ cung cấp cho frontend 1 cái url
// frontend sẽ thực hiện call api tới url để fetch data về
// có 5 dạng: get, post, put, patch, delete
// call api là dạng xử lý bất đồng bộ, nó sẽ chạy sau khi toàn bộ xử lý đồng bộ được thực hiện xong
// Ex:
//console.log là đồng bộ
//set timeout là xử lý bất đồng bộ

// console.log('1');
// setTimeout(console.log('2'),0);
// console.log('3');
// // -> result sẽ output ra 1, 3, 2



// fetch('https://jsonplaceholder.typicode.com/todos').then(function(response) {
// response.json().then(function (data){
//     console.log(data);
// })
// })

//https://js-post-api.herokuapp.com/api
// lấy data từ url về
const REQUEST_URL = 'https://js-post-api.herokuapp.com/api';
const postList = document.querySelector('.post-list');

//loading với after-loading
const loading = document.querySelector('.loading');
const afterLoading = document.querySelector('.after-loading');

loading.style.display = 'block';
afterLoading.style.display = 'none';

// lấy đc array data post bằng cách call api -> thực hiện build post bằng cách dùng template, sau đó appentchild vào post-list
fetch(`${REQUEST_URL}/posts`).then(function(response){
    response.json().then(function(data){
        data.forEach(element => {
            const postElement = buildPostElement(element);
            postList.appendChild(postElement);
        });
        //sau khi load data xong thì show after-loading ra
        afterLoading.style.display = 'block';
        loading.style.display = 'none';
    })
})

function buildPostElement(post){

    //lấy template post
    const postTemplate = document.querySelector('#postTemplate');
    const postFragment = postTemplate.content.cloneNode(true);
    const postElement = postFragment.querySelector('.post');

    //lấy element title của post -> update lại value bằng field title của data post lấy bằng api
    const postTitle = postElement.querySelector('h1');
    postTitle.innerText = post.title;

    //lấy element author của post -> update lại value bằng field author của data post lấy bằng api
    const postAuthor = postElement.querySelector('.author');
    postAuthor.innerText = post.author;

     //lấy element description của post -> update lại value bằng field description của data post lấy bằng api
    const postDescription = postElement.querySelector('.description');
    postDescription.innerText = post.description;

    //img
    const postImg = postElement.querySelector(".post-img");
    postImg.src = post.postImg;

    //tạo href để đi tới page detail của post
    const postLink = postElement.querySelector(".post-link");
    //tạo thêm param id cho href
    postLink.href = `detail.html?postId=${post.id}`;
    
    //return lại 1 cái postelement để append vào post-list
    return postElement;
}

