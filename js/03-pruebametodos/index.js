/* CLICK */
$('.btn-click').on('click', () => {
  $('.click').addClass('bg-green')
})


/* HIDE */
$('.btn-hide').on('click', () => {
  $('.hide p').hide()
})


/* SHOW */
$('.show p').hide()
$('.btn-show').on('click', () => {
  $('.show p').show()
})


/* TOGGLE */
$('.btn-toggle').on('click', () => {
  $('.toggle p').toggle()
})


/* SLIDEDOWN */
$('.slideDown p').hide()
$('.btn-slideDown').on('click', () => {
  $('.slideDown p').slideDown()
})


/* SLIDEUP */
$('.btn-slideUp').on('click', () => {
  $('.slideUp p').slideUp()
})

/* SLIDETOGGLE */
$('.btn-slideToggle').on('click', () => {
  $('.slideToggle p').slideToggle()
})

/* FADEIN */
$('.fadeIn p').hide()
$('.btn-fadeIn').on('click', () => {
  $('.fadeIn p').fadeIn()
})

/* FADEOUT */
$('.btn-fadeOut').on('click', () => {
  $('.fadeOut p').fadeOut()
})

/* BEFORE */
$('.btn-before').on('click', () => {
  $('.before p').before("TEXT ")
})

/* AFTER */
$('.btn-after').on('click', () => {
  $('.after p').after("TEXT ")
})

/* APPEND */
$('.btn-append').on('click', () => {
  $('.append p').append(" Texto añadido ")
})

/* HTML */
$('.btn-html').on('click', () => {
  $('.html p').html("<p>Se reemplazo el texto</p>")
})

/* ATTR */
$('.btn-attr').on('click', () => {
  $('.attr').attr("class", "bg-green")
})

/* VAL */
$('.btn-val').on('click', () => {
  $('input').val("Se añade texto")
})

/* TEXT */
$('.btn-text').on('click', () => {
  $('.text p').text("Se reemplazo el contenido")
})
