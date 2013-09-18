var WhipDay = Backbone.Model.extend({
 
});

var CalendarDay = Backbone.Model.extend({
 
});

var CalendarDaysDay = Backbone.Model.extend({
 
});
  
var WhipDays = Backbone.Collection.extend({
    model: WhipDay,
    url: "http://lordswhip.herokuapp.com/index.json"
});

var CalendarDays = Backbone.Collection.extend({
    model: CalendarDay,
    url: "http://services.parliament.uk/calendar/all.rss",
	
	parse: function(data) {
		var parsed=[];
		$(data).find('item').each(function (index) {
			var title = $(this).find('title').text();
			var link = $(this).find('link').text();
			var guid = $(this).find('guid').text();
			var author = $(this).find('author').text();
			var description = $(this).find('description').text();
			parsed.push({ title: title,
				link: link,
				guid: guid,
				author: author,
				description: description });
    });
    return parsed;
    },
		fetch: function (options) {
        options = options || {};
        options.dataType = "xml";
        return Backbone.Collection.prototype.fetch.call(this, options);
    }
    
});


var days = new CalendarDays;

days.fetch({success: function(){
	days.each(function(this_day) {
    console.log(this_day);
    
    $('ul#days').append(
    $('<li>').append(
        $('<p>').attr('class', 'description').append(this_day.attributes.description),
        $('<a>').attr('href',this_day.attributes.link).append(
            $('<span>').attr('class', 'tab').append(this_day.attributes.title)
))); 
    }
    )
    //document.write(JSON.stringify(days));
}});


var ListView = Backbone.View.extend({
    
  });

var listView = new ListView();
  
