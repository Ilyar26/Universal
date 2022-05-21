const nav = () => {

    const offerMenu = document.querySelector('.offer-item'),
        priceMenu = document.querySelector('.price-item'),
        companyMenu = document.querySelector('.company-item'),
        applicationMenu = document.querySelector('.application-item'),
        stageMenu = document.querySelector('.stage-item'),
        advantageMenu = document.querySelector('.advantage-item'),
        feedbackMenu = document.querySelector('.feedback-item'),
        questionMenu = document.querySelector('.q-a-item'),
        contactMenu = document.querySelector('.contact-item')

    offerMenu.addEventListener('click', () => {
        document.querySelector('.second-title').scrollIntoView({ behavior: "smooth" });
    })

    priceMenu.addEventListener('click', () => {
        document.querySelector('.price').scrollIntoView({ behavior: "smooth" });
    })

    companyMenu.addEventListener('click', () => {
        document.querySelector('.company-header').scrollIntoView({ behavior: "smooth" });
    })

    applicationMenu.addEventListener('click', () => {
        document.querySelector('.last-form').scrollIntoView({ behavior: "smooth" });
    })

    stageMenu.addEventListener('click', () => {
        document.querySelector('.offer-form').scrollIntoView({ behavior: "smooth" });
    })

    advantageMenu.addEventListener('click', () => {
        document.querySelector('.fourth-slide').scrollIntoView({ behavior: "smooth" });
    })

    feedbackMenu.addEventListener('click', () => {
        document.querySelector('.recomendation-head').scrollIntoView({ behavior: "smooth" });
    })

    questionMenu.addEventListener('click', () => {
        document.querySelector('.questions-and-answers').scrollIntoView({ behavior: "smooth" });
    })

    contactMenu.addEventListener('click', () => {
        document.querySelector('.footer').scrollIntoView({ behavior: "smooth" });
    })
}
export default nav;