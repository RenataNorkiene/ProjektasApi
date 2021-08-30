const dataContainer = document.querySelector('#data'); 

const fechData = async () => {
    try {
        const res = await fetch('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=PL641sN6pmAS2hLTqKdJebGqzTW4LIYH');
        const stories = await res.json();
        const story = stories.results;
        story.forEach(oneArticle => {
            const article = document.createElement('article');
            const link = document.createElement('button');
            const photo = document.createElement('img');
            const section = document.createElement('div');
            const abstract = document.createElement('p');
            const title = document.createElement('h3');
            const shortUrl = document.createElement('a');
            const publishedDate = document.createElement('p');

            photo.src = oneArticle.multimedia[0].url;
            section.id = "section";
            section.innerText = `section: ${oneArticle.section}`;
            abstract.id = "abstract";
            abstract.innerText = oneArticle.abstract;
            title.innerText = oneArticle.title;
            shortUrl.href = oneArticle.short_url;
            shortUrl.id = "shortUrl";
            shortUrl.innerText = "Read more";
            publishedDate.innerText = oneArticle.published_date.slice(0, 10);
            dataContainer.appendChild(article);
            article.append(section, photo, title, abstract, publishedDate,link);
            link.appendChild(shortUrl);
        })
    } catch (error){
        console.log(error);
    }
}

fechData();