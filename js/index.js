document.addEventListener('DOMContentLoaded', function () {
    // Function to show the About Us content with sliding animation and scroll to it
    window.showAboutUs = function () {
        resetContent(); // Reset everything to its normal state
        const aboutUsContent = document.getElementById('aboutUsContent');
        aboutUsContent.classList.add('slide-in');
        aboutUsContent.style.display = 'block';

        // Scroll to the About Us section
        aboutUsContent.scrollIntoView({ behavior: 'smooth' });
    };

    // Function to show the Download content
    window.showDownload = function () {
        resetContent(); // Reset everything to its normal state
        const downloadContent = document.getElementById('downloadContent');
        downloadContent.style.display = 'block';
    };

    // Function to show the News content
    window.showNews = function () {
        resetContent(); // Reset everything to its normal state
        const newsContent = document.getElementById('newsContent');
        newsContent.style.display = 'block';
    };

    // Function to start Bhoot animation
    window.startBhootAnimation = function () {
        var bhootImage = document.getElementById('bhootImage');
        bhootImage.classList.add('visible');
    };

    // Function to reset content to its normal state
    function resetContent() {
        const aboutUsContent = document.getElementById('aboutUsContent');
        aboutUsContent.style.display = 'none';
        aboutUsContent.classList.remove('slide-in');

        const downloadContent = document.getElementById('downloadContent');
        downloadContent.style.display = 'none';

        const newsContent = document.getElementById('newsContent');
        newsContent.style.display = 'none';
    }

    // Function to handle the "Home" link
    window.showHome = function () {
        resetContent(); // Reset everything to its normal state
        // Add additional functionality for the "Home" link if needed
    };

    // Function to redirect to GitHub
    window.redirectToGitHub = function () {
        window.location.href = "https://github.com";
    };

    // Define your news data (replace with your actual news content)
    const newsData = [
        { id: 1, title: 'Exciting News 1', content: 'Details about exciting news 1.' },
        { id: 2, title: 'Latest Update', content: 'Details about the latest game update.' },
        { id: 3, title: 'Upcoming Events', content: 'Details about upcoming in-game events.' },
        // Add more news items as needed
    ];

    // Create news grid dynamically
    const newsGrid = document.getElementById('newsGrid');
    newsData.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.textContent = news.title;
        newsItem.addEventListener('click', () => showNewsDetails(news));
        newsGrid.appendChild(newsItem);
    });

    // Function to display news details
    function showNewsDetails(news) {
        const newsDetailsContainer = document.getElementById('newsDetails');
        newsDetailsContainer.innerHTML = `
            <h2>${news.title}</h2>
            <p>${news.content}</p>
        `;
        newsDetailsContainer.style.display = 'block';
    }
});
