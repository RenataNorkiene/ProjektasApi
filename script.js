const dataContainer = document.querySelector('#data'); 


const fechData = fetch('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=PL641sN6pmAS2hLTqKdJebGqzTW4LIYH')
.then(responce => responce.json())
.then(articles => {
    console.log(articles.results);
    const info = articles.results;
    info.forEach(oneArticle => {
        console.log(oneArticle.section);
        console.log(oneArticle.title);
        console.log(oneArticle.abstract);
        console.log(oneArticle.short_url)
        
        const article = document.createElement('article');
        const divText = document.createElement('div');
        divText.id = "text";
        const link = document.createElement('button');

        
        const photo = document.createElement('img');
        console.log(oneArticle.multimedia[3].url)
        photo.src = oneArticle.multimedia[3].url;
        const section = document.createElement('p');
        section.innerText = `section: ${oneArticle.section}`;
        const abstract = document.createElement('p');
        abstract.innerText = oneArticle.abstract;
        const title = document.createElement('h3');
        title.innerText = oneArticle.title;
        const shortUrl = document.createElement('a');
        shortUrl.href = oneArticle.short_url;
        shortUrl.innerText = "Read more";
        const publishedDate = document.createElement('p');
        publishedDate.innerText = `Published date: ${oneArticle.published_date}`;
        dataContainer.appendChild(article);
        article.append(photo, divText);
        divText.append(title, abstract, section, publishedDate,link);
        link.appendChild(shortUrl);
    })
})