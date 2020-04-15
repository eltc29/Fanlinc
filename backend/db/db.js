import mongoose from 'mongoose';

export function connection() {
  const uri = "mongodb+srv://User:Password@cluster0-b18to.mongodb.net/test?retryWrites=true&w=majority";
  mongoose.connect(uri, {
                          useNewUrlParser : true,
                          useUnifiedTopology : true,
                          useCreateIndex : true,
                        });
  mongoose.connection.once('open', () => {
      console.log('MongoDB database connection established successfully!');
  });
}
