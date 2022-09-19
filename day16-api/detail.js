//lấy search để lấy đc postid của page detail theo hreft
const REQUEST_URL = 'https://js-post-api.herokuapp.com/api';
const queryString = window.location.search;
const searchParams = new URLSearchParams(queryString);

const postId = searchParams.get('postId');
console.log(postId);

const postDetailTitle = document.querySelector(".title");
const postDetailImg = document.querySelector(".post-detail-img");
const postDetailAuthor = document.querySelector(".post-detail-author");
const postDetailDescription = document.querySelector(".post-detail-description");

//loading với after-loading
const loading = document.querySelector('.loading');
const afterLoading = document.querySelector('.after-loading');

loading.style.display = 'block';
afterLoading.style.display = 'none';

//làm tương tự bên api.js để lấy data của 1 post object -> sau đó lấy data đắp vào element html
fetch(`${REQUEST_URL}/posts/${postId}`).then(function (jsonData) {
    return jsonData.json()
    // chỗ này return về 1 cái promise để có thể xài đc catch error ở dưới
    //.then ở ngoài -> vẫn work y chang cách cũ, chỉ đổi cú pháp để bắt đc error
}).then(function (response) {
    console.log(response);
    postDetailTitle.innerHTML = response.title;
    postDetailImg.src = response.imageUrl;
    postDetailAuthor.innerHTML = response.author;
    postDetailDescription.innerHTML = response.description.slice(0, 50) + "...";
}).catch(function (e) {
    // nếu gặp error thì sẽ direct về lại page index
    window.location.href = 'index.html';
}).finally(function () {
    //sau khi load data xong và không có error thì show after-loading ra
    loading.style.display = 'none';
    afterLoading.style.display = 'block';
})




