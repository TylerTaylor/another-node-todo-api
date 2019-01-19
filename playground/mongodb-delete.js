// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  // deleteMany
  // db.connection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
  //   console.log(result)
  // })

  // deleteOne
  // db.connection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result)
  // })

  // findOneAndDelete
  db.connection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    console.log(result)
  })

  // db.collection('User').deleteMany({ name: 'Tyler' })

  // db.collection('Users').findOneAndDelete({ _id: new ObjectID('some id') }).then((results) => {
  //   console.log(JSON.stringify(results, undefined, 2))
  // })

  // db.close()
})