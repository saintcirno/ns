document.getElementById('search-button').addEventListener('click', function() {
    const searchQuery = document.getElementById('search-input').value;
    fetchNews(searchQuery);
});

function fetchNews(query) {
    // Mock news data for demonstration
    const mockNews = [
        {
            title: 'News Article 1',
            description: 'This is a news article.',
            url: 'https://example.com/news-article-1'
        },
        {
            title: 'News Article 2',
            description: 'This is another news article.',
            url: 'https://example.com/news-article-2'
        }
    ];

    displayNews(mockNews);
}

function displayNews(news) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    news.forEach(article => {
        const newsArticle = document.createElement('div');
        newsArticle.classList.add('news-article');

        newsArticle.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.url}">Read more</a>
        `;

        newsContainer.appendChild(newsArticle);
    });
}
