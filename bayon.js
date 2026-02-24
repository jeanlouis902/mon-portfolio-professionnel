window.onload = function () {
    animateSkills()
}
function animateSkills() {
    let skills = document.querySelector(`.skills`)
    skills.foreEach(function (skills) {
        let endValue = parseInt(skill.textContent)
        let duration = 3000;
        let increment = endValue / (duration / 10)
        let current = 0;

        var timer = setInterval(function () {
            if (curent >= endValue) {
                clearInterval(timer)
            } else {
                current += increment
                skill.textContent = Math.round(current) + "%"
            }
        },10)
    })
} 