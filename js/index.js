(function() {
    const sections = ['section-01', 'section-02', 'section-03', 'section-04', 'section-05', 'section-06', 'section-07', 'section-08']
    const container = document.querySelector('.section-container')

    async function loadSections() {
        for (const sec of sections) {
            await fetch(`section/${sec}.html`)
            .then(res => res.text())
            .then(html => {
                container.innerHTML += html
            })
        }

        const overlay = document.querySelector('.loading-overlay')
        overlay.style.opacity = 0
        setTimeout(() => {
            overlay.style.display = 'none'
        }, 1000);

        setTimeout(() => {
            if (window.location.hash) {
                const target = document.querySelector(`a[name='${window.location.hash.replace('#','')}']`)
                console.log(`a[name='${window.location.hash.replace('#','')}']`)
                console.log(target)
                if (target) {
                    target.scrollIntoView({behavior: 'smooth'})
                }
            }
        }, 100)
    }

    loadSections()
})()