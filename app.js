var Day = Backbone.Model.extend({
 
});

var CalendarDaysDay = Backbone.Model.extend({
 
});
  
var Days = Backbone.Collection.extend({
    model: Day,
    url: "http://lordswhip.herokuapp.com/index.json"
});

var CalendarDays = Backbone.Collection.extend({
    model: CalendarDaysDay,
    url: "http://services.parliament.uk/calendar/all.rss"
});

var mydays = new Days;

mydays.fetch({success: function(){
    console.log(mydays);
    document.write(JSON.stringify(mydays));
}});


