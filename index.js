const mongoose = require("mongoose")

const databaseName = process.argv.slice(2).join()

mongoose.connect(`mongodb://localhost:27017/${databaseName}`, {
useNewUrlParser: true
})

const connection = mongoose.connection

connection.once("open", function() {
	console.log("*** MongoDB got connected ***");
	console.log(`Our Current Database Name : ${connection.db.databaseName}`)
	mongoose.connection.db.dropDatabase(
		console.log(`${connection.db.databaseName} database dropped.`)
	)
})