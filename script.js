const books = [
    { title: "자료구조와 알고리즘", seller: "김학생", price: "15,000원" },
    { title: "컴퓨터 네트워크", seller: "이학생", price: "20,000원" },
    { title: "공업수학", seller: "박학생", price: "10,000원" }
];

function displayBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    
    books.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p>판매자: ${book.seller}</p>
            <p>가격: ${book.price}</p>
            <button onclick="requestTrade('${book.seller}')">거래 요청</button>
        `;
        bookList.appendChild(bookDiv);
    });
}

function searchBooks() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));
    
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    
    filteredBooks.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p>판매자: ${book.seller}</p>
            <p>가격: ${book.price}</p>
            <button onclick="requestTrade('${book.seller}')">거래 요청</button>
        `;
        bookList.appendChild(bookDiv);
    });
}

function requestTrade(seller) {
    alert(seller + "님께 거래 요청을 보냈습니다!");
}

window.onload = displayBooks;
