function loadYTVideoThumbnail() {
    const videoBlockImgs = document.querySelectorAll('img[data-videoId]');
    videoBlockImgs.forEach(videoBlockImg => {
        let link = 'https://noembed.com/embed?url=http://www.youtube.com/watch?v=' + videoBlockImg.getAttribute('data-videoId');
    
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
        .then(object => videoBlockImg.src = object['thumbnail_url'])
        .catch(e => console.log(e))
    })
    
}

export {loadYTVideoThumbnail}