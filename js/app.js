

$(".nav-item").one("click", () => {
    console.log('dropdown nav item clicked')
    if ($("#navbarSupportedContent").hasClass('show')) {
        console.log('now inside if statment')
        $("#navbarSupportedContent").removeClass('show')
    }
})

$(".project-btn").hover(() => {
    $(".fa-angle-double-right").addClass("rotate")
}, () => {
    $(".fa-angle-double-right").removeClass("rotate")
})


$(".learn-more-btn").click((e) => {
    const index = $(".learn-more-btn").index(e.target)
    console.log(index)
    $(".modal").eq(index).modal('toggle')
})

