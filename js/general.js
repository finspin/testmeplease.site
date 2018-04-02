const books = [{
    "title": "Romeo and Juliet",
    "author": "William Shakespeare",
    "tags": ["drama", "classics", "plays", "romance", "poetry"]
}, {
    "title": "Waiting for Godot",
    "author": "Samuel Beckett",
    "tags": ["drama", "classics", "plays"]
}, {
    "title": "The Tipping Point: How Little Things Can Make a Big Difference",
    "author": "Malcolm Gladwell",
    "tags": ["business", "psychology", "sociology", "science", "economics"]
}, {
    "title": "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
    "author": "Eric Ries",
    "tags": ["business", "entrepreneurship", "management"]
}, {
    "title": "Harry Potter and the Sorcerer's Stone",
    "author": "J.K. Rowling",
    "tags": ["fantasy", "fiction", "children"]
}, {
    "title": "The Fellowship of the Ring",
    "author": "J.R.R. Tolkien",
    "tags": ["fantasy", "fiction", "adventure"]
}, {
    "title": "Charlotte's Web",
    "author": "E.B. White",
    "tags": ["children", "classics", "fiction"]
}, {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "tags": ["classics", "fiction", "romance"]
}, {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "tags": ["classics", "fiction", "historical"]
}, {
    "title": "And Then There Were None",
    "author": "Agatha Christie",
    "tags": ["mystery", "classics", "fiction", "crime", "thriller"]
}
];

const options = {
    keys: ['title', 'author', 'tags'],
    shouldSort: false,
    threshold: 0,
    minMatchCharLength: 1
};
const fuse = new Fuse(books, options);
var results;

var input = document.getElementById('book-search');

if (input) {
    input.addEventListener('keyup', function () {
        var searchResultsElement = document.getElementById("searchResults");
        searchResultsElement.innerHTML = '';

        results = fuse.search(input.value);

        if (results.length > 0) {
            results.forEach(function (result) {
                const item = document.createElement('li');

                const title = document.createElement('div');
                title.className = "title";
                title.appendChild(document.createTextNode(result.title));

                const author = document.createElement('div');
                author.className = "author";
                author.appendChild(document.createTextNode(result.author));

                const tags = document.createElement('span');
                tags.className = "tags";
                tags.appendChild(document.createTextNode(result.tags));

                item.appendChild(title);
                item.appendChild(author);
                item.appendChild(tags);
                searchResultsElement.appendChild(item);
            });
        }
    });
}


// Assign .active class to the current navigation link
$(function () {
    var current = location.pathname;

    $('.top-right-nav li a').each(function () {
        var $this = $(this);
        if (current !== '/' && $this.attr('href').indexOf(current) !== -1) {
            $this.parent().addClass('active');
        }
    });
});

$("#load-product").click(function(e) {
    e.preventDefault();

    $.ajax({
        url: "/examples/ajax/product.html",
        cache: false,
        success: function(html) {
            setTimeout(function() {
                $("#product").html(html);
            }, 2000);
        }
    });
});

$(".login-form button[type='submit']").click(function(e) {
    e.preventDefault();

    const username = $("#username");
    const password = $("#password");

    if (username.val() === "user" && password.val() === "pass") {
        window.location.replace("/profile/");
    } else {
        username.val("");
        password.val("");
        $(".login-form .alert").removeClass("d-none");
    }
});
