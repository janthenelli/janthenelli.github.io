

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

