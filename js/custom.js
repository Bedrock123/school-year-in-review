// Makes Confetti Dissapear 12 seconds after load
window.setTimeout(function() {
    $('#world').fadeOut("slow");
}, 8000);

if ($(window).width() < 800) {
    $('#world').fadeOut("slow");
}
// Scroll Progress Init/Config
scrollProgress.set({
    color: '#604ca8',
    height: '12px',
    bottom: false
});
var options = {  
    useEasing: true,
      useGrouping: true,
      separator: ',',
      decimal: '.',
      prefix: '',
      suffix: ''
};
var days = new CountUp("days-read", 0, 34, 0, 5.5, options);
var hours = new CountUp("hours-read", 0, 12, 0, 5.5, options);
var mins = new CountUp("avg-min-read", 0, 12, 0, 5.5, options);
var weekends = new CountUp("weekends-read", 0, 4, 0, 5.5, options);

days.start();
hours.start();
mins.start();
weekends.start();
