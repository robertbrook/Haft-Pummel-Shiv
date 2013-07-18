var Day = Backbone.Model.extend({
 
});
  
var Days = Backbone.Collection.extend({
    model: Day,
    url: "http://lordswhip.herokuapp.com/index.json"
});

var CalendarDays = Backbone.Collection.extend({
    model: CalendarDaysDay,
    url: "http://services.parliament.uk/calendar/all.rss"
});

var days = new Days;

days.fetch({success: function(){
    console.log(days);
    document.write(JSON.stringify(days));
}});