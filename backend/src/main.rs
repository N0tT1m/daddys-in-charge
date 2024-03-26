use mongodb::{ 
	bson::{Document, doc},
	Client,
	Collection 
};

#[tokio::main]
async fn main() -> mongodb::error::Result<()> {
    // Replace the placeholder with your Atlas connection string
    let uri = "mongodb://192.168.1.89:27017/?retryWrites=true&loadBalanced=false&serverSelectionTimeoutMS=5000&connectTimeoutMS=10000";
    // Create a new client and connect to the server
    let client = Client::with_uri_str(uri).await?;
    // Get a handle on the movies collection
    let database = client.database("calendar");
    let my_coll: Collection<Document> = database.collection("events");
    // Create a event
    let my_movie = my_coll.insert(doc! {
        'start': subDays(startOfDay(new Date()), 1),
        'end': addDays(new Date(), 1),
        'title': "A 3 day event",
        'color': { ...colors.red },
        'actions': this.actions,
        'allDay': true,
        'resizable': {
          'beforeStart': true,
          'afterEnd': true,
        },
        'draggable': true,
      }, None).await?;
    // Print the document
    // println!("Found a movie:\n{:#?}", my_movie);
    Ok(())
}
