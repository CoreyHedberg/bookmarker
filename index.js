(function () {
  getBookmarks();
})();

// listen for form submit
document.getElementById("my-form").addEventListener("submit", saveBookmark);

function saveBookmark(e) {
  // get form values
  let siteName = document.getElementById("site-name").value;
  let siteURL = document.getElementById("site-url").value;

  let bookmark = {
    name: siteName,
    url: siteURL,
  };

  if (localStorage.getItem("bookmarks") === null) {
    console.log("it is null");
    let bookmarks = [];
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  } else {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  e.preventDefault();
}

function getBookmarks() {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  let bookmarksName = document.getElementById("bookmarks-name");
  let bookmarksURL = document.getElementById("bookmarks-url");

  bookmarksName.innerHTML = "";
  bookmarksURL.innerHTML = "";

  for (let i = 0; i < bookmarks.length; i++) {
    let name = bookmarks[i].name;
    let url = bookmarks[i].url;

    bookmarksName.innerHTML += "<div>" + name + "</div>";
    bookmarksURL.innerHTML += url;
  }
}
