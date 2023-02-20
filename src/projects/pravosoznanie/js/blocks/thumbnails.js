function thumbnails() {
    let thumbnailImgs = document.querySelectorAll('[data-videoId]');
    
    thumbnailImgs.forEach(img => {
        let link = 'https://noembed.com/embed?url=http://www.youtube.com/watch?v=' + img.getAttribute('data-videoId');
    
        fetch(link)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
        })
                                                // .then(text => {
                                                //     return text.match(/(?<=\().*(?=\))/i)[0]
                                                // })
                                                // .then(protoJSON => JSON.parse(protoJSON))
        .then(object => {
            if (object.error) {
                throw new Error(`${object.error} while fetching thumbnail`)
            }
            return object
        })
        .then(object => img.src = object['thumbnail_url'])
        .then(() => {
            img.closest('a').href = 'https://youtube.com/watch?v=' + img.getAttribute('data-videoId');
            img.closest('a').setAttribute('target','_blank')
        })
        .catch(e => console.log(e))
    })
}

export default thumbnails;